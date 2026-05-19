"use client";

import { useState } from "react";
import { AlertDialog, Button } from "@heroui/react";
import { Edit, Trash2, X } from "lucide-react";
import { FaTriangleExclamation } from "react-icons/fa6";
import { toast } from "react-toastify";

const Manage_button = ({ facility, onDelete, setFacilities }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [formData, setFormData] = useState({
    facilityName: facility?.facilityName || "",
    location: facility?.location || "",
    description: facility?.description || "",
    pricePerHour: facility?.pricePerHour || "",
    capacity: facility?.capacity || "",
  });


const handleDeleteClick = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(
      `http://localhost:5000/facility/${facility._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    if (res.ok) {
      toast.success("Deleted successfully!");

      setFacilities((prev) =>
        prev.filter((item) => item._id !== facility._id)
      );
    } else {
      toast.error(data.message || "Delete failed");
    }
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong");
  }
};
  
  const handleUpdate = async () => {
        const token = localStorage.getItem("token");
    
    try {
      const res = await fetch(
        `http://localhost:5000/facility/${facility._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Facility updated successfully!");

        setFacilities((prev) =>
          prev.map((item) =>
            item._id === facility._id
              ? { ...item, ...formData }
              : item
          )
        );

        setIsEditOpen(false);
      } else {
        toast.info("No changes made");
      }
    } catch (error) {
      console.log(error);
      toast.error("Update failed");
    }
  };

  return (
    <div className="mt-6 pt-6 border-t border-slate-800 flex gap-4 items-center">

      {/* DELETE ALERT (UNCHANGED UI) */}
      <AlertDialog>
        <Button
          variant="light"
          className="text-red-400 border border-red-950/40 hover:bg-red-950/30 font-medium px-4 py-2 rounded-xl flex gap-2"
        >
          <Trash2 size={16} />
          Delete
        </Button>

        <AlertDialog.Backdrop className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md">
          <AlertDialog.Container>
            <AlertDialog.Dialog className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-6 w-100">

              <AlertDialog.Header className="text-center">
                <FaTriangleExclamation className="text-red-500 text-4xl mx-auto" />

                <AlertDialog.Heading className="text-xl font-bold mt-3">
                  Delete Facility Listing?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body className="text-center mt-3 text-slate-400 text-sm">
                This action cannot be undone.
              </AlertDialog.Body>

              <div className="font-bold text-white text-center mt-2">
                {facility.facilityName}
              </div>

              <AlertDialog.Footer className="flex flex-col gap-2 mt-6">

                <Button
                  color="danger"
  className="bg-cyan-500 border-none p-0 min-w-0 h-auto shadow-none text-white hover:bg-cyan-400 rounded-lg px-2 hover:scale-95 duration-300 cursor-pointer font-medium transition-colors"

                  onPress={handleDeleteClick}
                >
                  Yes, Delete Listing
                </Button>

                <Button  variant="light"   
                  className="bg-cyan-500 border-none p-0 min-w-0 h-auto shadow-none text-white hover:bg-cyan-400 rounded-lg px-2 hover:scale-95 duration-300 cursor-pointer font-medium transition-colors"

 slot="close">
                  Cancel
                </Button>

              </AlertDialog.Footer>

            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>

      {/* EDIT BUTTON (UNCHANGED STYLE) */}
      <Button
        className="flex gap-2 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-5 py-2 rounded-xl"
        onPress={() => setIsEditOpen(true)}
      >
        <Edit size={16} />
        Edit Space
      </Button>

      {/* EDIT MODAL (UNCHANGED UI) */}
      {isEditOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 p-7 rounded-2xl w-full max-w-md text-white relative">

            {/* CLOSE */}
            <button
              onClick={() => setIsEditOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* HEADER */}
            <h2 className="text-xl font-black mb-6">
              Modify Details
            </h2>

            {/* INPUTS */}
            <input
              className="w-full p-2 mb-2 bg-slate-950 border border-slate-800 rounded"
              value={formData.facilityName}
              onChange={(e) =>
                setFormData({ ...formData, facilityName: e.target.value })
              }
              placeholder="Facility Name"
            />

            <input
              className="w-full p-2 mb-2 bg-slate-950 border border-slate-800 rounded"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              placeholder="Location"
            />

            <input
              className="w-full p-2 mb-2 bg-slate-950 border border-slate-800 rounded"
              value={formData.pricePerHour}
              onChange={(e) =>
                setFormData({ ...formData, pricePerHour: e.target.value })
              }
              placeholder="Price"
            />

            <input
              className="w-full p-2 mb-2 bg-slate-950 border border-slate-800 rounded"
              value={formData.capacity}
              onChange={(e) =>
                setFormData({ ...formData, capacity: e.target.value })
              }
              placeholder="Capacity"
            />

            <textarea
              className="w-full p-2 mb-3 bg-slate-950 border border-slate-800 rounded"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Description"
            />

            {/* BUTTONS */}
            <div className="flex gap-2">

            <Button 
  color="primary" 
  onPress={handleUpdate}
  className="bg-cyan-500 border-none p-0 min-w-0 h-auto shadow-none text-white hover:bg-cyan-400 rounded-lg px-2 hover:scale-95 duration-300 cursor-pointer font-medium transition-colors"
>
  Save Changes
</Button>

<Button 
  variant="light" 
  onPress={() => setIsEditOpen(false)}
  className="bg-cyan-500 border-none p-0 min-w-0 h-auto shadow-none text-white hover:bg-cyan-400 rounded-lg px-2 hover:scale-95 duration-300 cursor-pointer font-medium transition-colors"
>
  Cancel
</Button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Manage_button;