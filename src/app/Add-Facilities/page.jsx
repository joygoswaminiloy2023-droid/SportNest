'use client'

import { authClient } from "@/lib/auth-client";
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button} from "@heroui/react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { HiCheck, HiChevronDown } from "react-icons/hi";
import { toast } from "react-toastify";

const addFacilities = () => {
  const router = useRouter();



  const { data: session} = authClient.useSession();
  
  const ownerEmail = session?.user?.email || "owner@sportnest.com";

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const facilityData = Object.fromEntries(data.entries());

  
    facilityData.ownerEmail = ownerEmail;

    console.log(facilityData);

    const res = await fetch("http://localhost:5000/facility", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(facilityData)
    });

    if (res.ok) {
      toast.success("Facility added successfully!");
      router.push("/Add-Facilities");
    } else {
      toast.error("Failed to add facility. Please try again.");
    }
  };

  const inputClass =
    "rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition w-full px-3 py-2 bg-white text-black";

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
    <div className=" flex items-center justify-center bg-linear-to-br from-[#070d19] via-[#0a1220] to-[#03060a] p-6 overflow-hidden">
      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-white/20 max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="px-10 py-6 border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
          <h2 className="text-3xl font-black uppercase tracking-tight">
            <span className="bg-linear-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Add Facility
            </span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Create & list premium sports spaces
          </p>
        </div>

        <form onSubmit={onSubmit} className="p-10 space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Facility Name */}
            <div className="md:col-span-2 space-y-2">
              <TextField name="facilityName" isRequired>
                <Label className="text-sm font-medium text-gray-700">
                  Facility Name
                </Label>
                <Input
                  placeholder="e.g., City Sports Arena"
                  className={inputClass}
                />
                <FieldError className="text-red-500 text-sm" />
              </TextField>
            </div>

            {/* Facility Type */}
            <div className="space-y-2 relative">
              <Label className="text-sm font-medium text-gray-700">
                Facility Type
              </Label>
              <Select name="facilityType" className="w-full">
                <Select.Trigger
                  className="w-full rounded-xl border border-gray-300 px-3 py-2.5 
                  flex justify-between items-center bg-white text-gray-700
                  focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition outline-none"
                >
                  <Select.Value placeholder="Select facility type" />
                  <Select.Indicator>
                    <HiChevronDown className="h-5 w-5 text-gray-400" />
                  </Select.Indicator>
                </Select.Trigger>
                <Select.Popover className="z-9999 w-xl mt-1">
                  <ListBox className="bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden focus:outline-none">
                    {facilityTypes.map((item) => (
                      <ListBox.Item 
                        key={item} 
                        id={item} 
                        textValue={item}
                        className="px-4 py-3 cursor-pointer flex justify-between items-center text-sm text-gray-700
                        hover:bg-cyan-50 hover:text-cyan-700 focus:bg-cyan-50 focus:outline-none transition-colors"
                      >
                        <span className="font-medium">{item}</span>
                        <ListBox.ItemIndicator>
                          <HiCheck className="h-5 w-5 text-cyan-600" />
                        </ListBox.ItemIndicator>
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
              <FieldError className="text-red-500 text-sm" />
            </div>

            {/* Image URL Field */}
            <div className="md:col-span-2 space-y-2">
              <TextField name="imageUrl" isRequired>
                <Label className="text-sm font-medium text-gray-700">
                  Image URL
                </Label>
                <Input
                  type="url"
                  placeholder="https://example.com/facility-image.jpg"
                  className={inputClass}
                />
                <FieldError className="text-red-500 text-sm" />
              </TextField>
            </div>

            {/* Location */}
            <div className="md:col-span-2 space-y-2">
              <TextField name="location" isRequired>
                <Label className="text-sm font-medium text-gray-700">
                  Location
                </Label>
                <Input
                  placeholder="Full address, city, stadium name"
                  className={inputClass}
                />
                <FieldError className="text-red-500 text-sm" />
              </TextField>
            </div>

            {/* Price Per Hour */}
            <div className="space-y-2">
              <TextField name="pricePerHour" isRequired>
                <Label className="text-sm font-medium text-gray-700">
                  Price Per Hour (USD)
                </Label>
                <Input
                  type="number"
                  placeholder="120"
                  step="1"
                  min="0"
                  className={inputClass}
                />
                <FieldError className="text-red-500 text-sm" />
              </TextField>
            </div>

            {/* Capacity */}
            <div className="space-y-2">
              <TextField name="capacity" isRequired>
                <Label className="text-sm font-medium text-gray-700">
                  Capacity (Players)
                </Label>
                <Input
                  type="number"
                  placeholder="22"
                  min="1"
                  className={inputClass}
                />
                <FieldError className="text-red-500 text-sm" />
              </TextField>
            </div>

            {/* Available Time Slots */}
            <div className="md:col-span-2 space-y-2">
              <TextField name="availableTimeSlots" isRequired>
                <Label className="text-sm font-medium text-gray-700">
                  Available Time Slots
                </Label>
                <TextArea
                  placeholder="e.g., Mon-Fri: 6AM-10PM, Sat-Sun: 8AM-11PM&#10;Specific slots: 08:00-10:00, 10:00-12:00, 14:00-16:00, 16:00-18:00"
                  className={`${inputClass} min-h-25`}
                />
                <FieldError className="text-red-500 text-sm" />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2 space-y-2">
              <TextField name="description" isRequired>
                <Label className="text-sm font-medium text-gray-700">
                  Description
                </Label>
                <TextArea
                  placeholder="Describe facility features, amenities, lighting, parking, changing rooms, equipment availability..."
                  className={`${inputClass} min-h-30`}
                />
                <FieldError className="text-red-500 text-sm" />
              </TextField>
            </div>

            {/* Owner Email - Auto-filled (Hidden but submitted) */}
            <TextField name="ownerEmail" defaultValue={ownerEmail} className="hidden">
              <Input type="hidden" />
            </TextField>

          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-linear-to-r from-cyan-500 to-emerald-600 hover:from-cyan-600 hover:to-emerald-700 text-white font-medium py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Add Facility
          </Button>
        </form>
      </div>
    </div>
  );
};

export default addFacilities;