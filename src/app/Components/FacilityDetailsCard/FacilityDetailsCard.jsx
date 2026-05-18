"use client";

import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const FacilityDetailsCard = ({ data}) => {
const router=useRouter()
  const {
    _id,
    facilityName,
    facilityType,
    imageUrl,
    location,
    pricePerHour,
    capacity,
    availableTimeSlots,
    description,
    ownerEmail,
  } = data;

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const slots = [
    "07:00 AM",
    "09:00 AM",
    "11:00 AM",
    "01:00 PM",
    "04:00 PM",
    "06:00 PM",
  ];

  const [bookingDate, setBookingDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [hours, setHours] = useState(1);

  const totalPrice = Number(pricePerHour || 0) * hours;

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

  
    if (!user) {
      toast.error("Please login first");
      return;
    }
    if (!selectedSlot) {
  toast.error("Please select a time slot");
  return;
}
    if (!bookingDate) {
  toast.error("Please select Date");
  return;
}

    const bookingData = {
      user_name: user?.name,
      user_image: user?.image,
      user_id: user?.id,
user_email: user?.email,
      facility_id: _id,
      facility_name: facilityName,
      facility_img: imageUrl,

      booking_date: bookingDate,
      time_slot: selectedSlot,
      hours,
      total_price: totalPrice,
      status: "pending",
    };

    try {
      const res = await fetch(
        `http://localhost:5000/bookings`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      const result = await res.json();

      if (result?.acknowledged ) {
        toast.success("Booking successful!");
        router.push('/My-bookings')
      } else {
        toast.error("Booking failed!");
      }
    } catch (error) {
      toast.error("Server error! Try again.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 my-6 bg-[#0B0F17] text-white rounded-2xl border border-slate-800 shadow-2xl">

      {/* HEADER */}
      <div className="mb-6">
        <p className="text-sm text-emerald-400 font-medium">
          {facilityType}
        </p>

        <h1 className="text-3xl font-extrabold mt-1">
          {facilityName}
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          {location}
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* IMAGE */}
        <div>
          <div className="relative h-64 rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={facilityName}
                fill
                className="object-cover"
              />
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <p className="text-xs text-slate-400 uppercase">
                Price
              </p>
              <h3 className="text-xl font-bold">
                ${pricePerHour}/hr
              </h3>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <p className="text-xs text-slate-400 uppercase">
                Capacity
              </p>
              <h3 className="text-xl font-bold">
                {capacity}
              </h3>
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-4">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <h3 className="text-sm font-semibold mb-2">
              Description
            </h3>
            <p className="text-sm text-slate-400">
              {description}
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <h3 className="text-sm font-semibold mb-2">
              Available Time
            </h3>
            <p className="text-sm text-slate-400">
              {availableTimeSlots}
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <p className="text-xs text-slate-400 uppercase">
              Owner
            </p>
            <p className="text-sm text-slate-300">
              {ownerEmail}
            </p>
          </div>
        </div>

        {/* BOOKING */}
        <div>
          <form
            onSubmit={handleBookingSubmit}
            className="bg-slate-900 p-5 rounded-xl border border-slate-800"
          >
            <h2 className="text-xl font-bold mb-5">
              Booking
            </h2>

            {/* DATE */}
            <input
              type="date"
              value={bookingDate}
              onChange={(e) =>
                setBookingDate(e.target.value)
              }
              className="w-full bg-[#0B0F17] border border-slate-700 rounded-lg px-3 py-2 mb-4"
            />

            {/* SLOTS */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {slots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  
                  onClick={() =>
                    setSelectedSlot(slot)
                  }
                  className={`py-2 rounded-lg border text-xs ${
                    selectedSlot === slot
                      ? "bg-emerald-500 text-black"
                      : "border-slate-700 text-slate-300"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            {/* HOURS */}
            <div className="flex items-center justify-between bg-[#0B0F17] border border-slate-700 rounded-lg p-2 mb-4">
              <button
                type="button"
                onClick={() =>
                  setHours((p) => Math.max(1, p - 1))
                }
                className="px-3 py-1 bg-slate-800 rounded"
              >
                -
              </button>

              <span>{hours} Hour</span>

              <button
                type="button"
                onClick={() =>
                  setHours((p) => p + 1)
                }
                className="px-3 py-1 bg-slate-800 rounded"
              >
                +
              </button>
            </div>

            {/* TOTAL */}
            <div className="mb-4 text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Price per hour</span>
                <span>${pricePerHour}</span>
              </div>

              <div className="flex justify-between mt-2 font-bold text-lg">
                <span>Total</span>
                <span className="text-emerald-400">
                  ${totalPrice}
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-emerald-500 text-black font-bold py-3 rounded-lg hover:bg-emerald-400 active:scale-[0.98] transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl py-2 overflow-hidden">
        <Marquee speed={85} gradient={false}>
          <p className="text-sm font-semibold text-red-500 px-6">
            Lunch break time: 3:00 PM – 4:00 PM | Please come back after break
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default FacilityDetailsCard;