'use client'

import { authClient } from "@/lib/auth-client";
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import { HiCheck, HiChevronDown } from "react-icons/hi";
import { toast } from "react-toastify";
import { ShieldCheck, MapPin, DollarSign, Users, Clock, FileText } from "lucide-react";

const AddFacilities = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const ownerEmail = session?.user?.email || "owner@sportnest.com";

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const facilityData = Object.fromEntries(data.entries());

    facilityData.ownerEmail = ownerEmail;

    const res = await fetch("http://localhost:5000/facility", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(facilityData)
    });

    if (res.ok) {
      toast.success("Facility added successfully!");
      router.push("/Manage-Facilities");
    } else {
      toast.error("Failed to add facility. Please try again.");
    }
  };

  // Modern Dark-themed Glassmorphism inputs
  const inputClass =
    "w-full px-4 py-3 bg-[#111827]/60 text-white rounded-xl border border-slate-800 placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 outline-none";

  const labelClass = "text-xs font-semibold tracking-wider text-slate-400 uppercase flex items-center gap-2 mb-1.5";

  const facilityTypes = [
    "Football Pitch",
    "Basketball Court",
    "Tennis Court",
    "Badminton Court",
    "Swimming Pool",
    "Cricket Ground",
    "Volleyball Court",
    "Gymnasium",
    "Multi-Purpose Arena",
    "Padel Court",
    "Boxing Ring",
    "Yoga Studio",
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#070d19] via-[#0a1220] to-[#03060a] p-4 md:p-8">
      <div className="w-full max-w-4xl bg-[#0B0F17]/90 backdrop-blur-md shadow-2xl rounded-2xl border border-slate-800/80 max-h-[92vh] overflow-y-auto custom-scrollbar">

        {/* Sticky Header */}
        <div className="px-8 py-6 border-b border-slate-800/60 sticky top-0 bg-[#0B0F17]/95 backdrop-blur-md z-10 flex flex-col justify-center sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-wider bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Add New Space
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Publish and list premium sports spaces onto the marketplace
            </p>
          </div>
          
        </div>

        {/* Form Body */}
        <form onSubmit={onSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Facility Name */}
            <div className="md:col-span-2">
              <TextField name="facilityName" isRequired>
                <Label className={labelClass}>Facility Title</Label>
                <Input
                  placeholder="e.g., Downtown Olympic Arena"
                  className={inputClass}
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>
            </div>

            {/* Facility Type Selector */}
            <div className="flex flex-col">
              <Label className={labelClass}>Arena Category</Label>
              <Select name="facilityType" className="w-full">
                <Select.Trigger
                  className="w-full px-4 py-3 bg-[#111827]/60 text-slate-200 rounded-xl border border-slate-800 flex justify-between items-center focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 outline-none text-sm cursor-pointer"
                >
                  <Select.Value placeholder="Select type" />
                  <Select.Indicator>
                    <HiChevronDown className="h-5 w-5 text-slate-400" />
                  </Select.Indicator>
                </Select.Trigger>
                <Select.Popover className="z-50 w-full md:w-[380px] mt-1">
                  <ListBox className="bg-[#0B0F17] border border-slate-800 rounded-xl shadow-2xl max-h-60 overflow-y-auto p-1 focus:outline-none custom-scrollbar">
                    {facilityTypes.map((item) => (
                      <ListBox.Item 
                        key={item} 
                        id={item} 
                        textValue={item}
                        className="px-4 py-2.5 rounded-lg cursor-pointer flex justify-between items-center text-sm text-slate-300 hover:bg-slate-800/80 hover:text-cyan-400 focus:bg-slate-800/80 focus:outline-none transition-all duration-200"
                      >
                        <span className="font-medium">{item}</span>
                        <ListBox.ItemIndicator>
                          <HiCheck className="h-4 text-cyan-400" />
                        </ListBox.ItemIndicator>
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
              <FieldError className="text-red-400 text-xs mt-1" />
            </div>

            {/* Image URL */}
            <div>
              <TextField name="imageUrl" isRequired>
                <Label className={labelClass}>Showcase Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://images.unsplash.com/your-image.jpg"
                  className={inputClass}
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>
            </div>

            {/* Location */}
            <div className="md:col-span-2">
              <TextField name="location" isRequired>
                <Label className={labelClass}><MapPin size={14} className="text-cyan-400" /> Street Address & Venue Location</Label>
                <Input
                  placeholder="Street, District, Stadium Complex / Block Number"
                  className={inputClass}
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>
            </div>

            {/* Price Per Hour */}
            <div>
              <TextField name="pricePerHour" isRequired>
                <Label className={labelClass}><DollarSign size={14} className="text-emerald-400" /> Hourly Rate (USD)</Label>
                <Input
                  type="number"
                  placeholder="85"
                  step="1"
                  min="0"
                  className={inputClass}
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>
            </div>

            {/* Capacity */}
            <div>
              <TextField name="capacity" isRequired>
                <Label className={labelClass}><Users size={14} className="text-blue-400" /> Max Operational Capacity</Label>
                <Input
                  type="number"
                  placeholder="16 Players"
                  min="1"
                  className={inputClass}
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>
            </div>

            {/* Available Time Slots (FIXED: Hydration-safe Placeholder string format) */}
            <div className="md:col-span-2">
              <TextField name="availableTimeSlots" isRequired>
                <Label className={labelClass}><Clock size={14} className="text-purple-400" /> Availability & Operational Windows</Label>
                <TextArea
                  placeholder={`e.g., Mon-Fri: 06:00 AM - 10:00 PM\nAvailable slots: 08:00 AM, 11:00 AM, 04:00 PM`}
                  className={`${inputClass} min-h-[90px] py-3 resize-none`}
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>
            </div>

            {/* Description (FIXED: Hydration-safe Placeholder string format) */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label className={labelClass}><FileText size={14} className="text-amber-400" /> Field Overview & Amenities</Label>
                <TextArea
                  placeholder={`Highlight features like floodlighting, hardwood/turf configurations, parking allocations, changing rooms, or equipment rentals included...`}
                  className={`${inputClass} min-h-30 py-3 resize-none`}
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>
            </div>

            {/* Hidden Field Block */}
            <TextField name="ownerEmail" defaultValue={ownerEmail} className="hidden">
              <Input type="hidden" />
            </TextField>
          </div>

          {/* Action Row Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-linear-to-r from-cyan-500 via-cyan-600 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-black font-bold py-3.5 rounded-xl transition-all duration-300 transform active:scale-[0.99] shadow-lg shadow-cyan-500/10 cursor-pointer text-sm tracking-wider uppercase"
            >
              Confirm & Launch Venue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFacilities;