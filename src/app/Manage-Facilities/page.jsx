"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@heroui/react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

import { MapPin, Users } from "lucide-react";
import Manage_button from "../Components/manage-facility/Manage_button";

const MyFacilities = () => {
  const { data: session, isPending } = authClient.useSession();
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    const email = session?.user?.email;

    if (isPending || !email) return;

    const fetchFacilities = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/facility?ownerEmail=${encodeURIComponent(email)}`
        );

        const data = await res.json();
        setFacilities(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load facilities");
      }
    };

    fetchFacilities();
  }, [session, isPending]);

  // DELETE
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/facility/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Deleted Successfully");

        setFacilities((prev) =>
          prev.filter((item) => item._id !== id)
        );
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error while deleting");
    }
  };

  // LOADING UI
  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a1220] text-white">
        <p className="animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a1220] p-8 text-white">
      <div className="container mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-5">
          <div>
            <h1 className="text-3xl font-bold">
              My Facilities
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Manage your listings
            </p>
          </div>

          <Link href="/Add-Facilities">
            <Button color="primary">
              Add Facility
            </Button>
          </Link>
        </div>

        {/* EMPTY */}
        {facilities.length === 0 ? (
          <p className="text-gray-400 text-center mt-10">
            No facilities found.
          </p>
        ) : (
          <div className="space-y-6">
            {facilities.map((facility) => (
              <div
                key={facility._id}
                className="bg-gray-900 rounded-xl overflow-hidden flex flex-col md:flex-row"
              >

                {/* IMAGE */}
                <div className="md:w-[300px] h-[220px] relative">
                  <Image
                    src={
                      facility.imageUrl ||
                      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2"
                    }
                    alt={facility.facilityName}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex-1 p-5 flex flex-col justify-between">

                  <div>
                    <h2 className="text-xl font-semibold">
                      {facility.facilityName}
                    </h2>

                    <div className="flex items-center gap-2 text-gray-400 mt-2">
                      <MapPin size={16} />
                      <p>{facility.location}</p>
                    </div>

                    <p className="text-gray-300 mt-3 text-sm">
                      {facility.description}
                    </p>

                    <div className="flex gap-5 mt-4 text-sm">
                      <p className="text-green-400 font-semibold">
                        ${facility.pricePerHour}/hr
                      </p>

                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <p>{facility.capacity} Players</p>
                      </div>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <Manage_button
                    facility={facility}
                    onDelete={handleDelete}
                    setFacilities={setFacilities}
                  />
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFacilities;