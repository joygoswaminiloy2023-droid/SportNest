"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarClear } from "react-icons/io5";

const UpcomingEvents = () => {
  return (
    <section className="bg-[#050816] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Upcoming <span className="text-cyan-400">Sports Events</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Join exciting tournaments and championships happening across the
            city with premium sports experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition duration-500">
            <div className="relative h-64 overflow-hidden">
              <Image
                width={400}
              height={400}
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
                alt="Football Tournament"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Football Tournament
              </h3>

              <div className="flex items-center gap-3 text-gray-300 mb-3">
                <IoCalendarClear className="text-cyan-400 text-lg" />
                <span>25 July 2026</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 mb-6">
                <FaLocationDot className="text-cyan-400 text-lg" />
                <span>Dhaka Stadium</span>
              </div>

               <Link
  href="/all-facilities"
  className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 active:scale-95 transition-all duration-300 text-black font-semibold shadow-lg shadow-cyan-500/30"
>
  Join Event
</Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition duration-500">
            <div className="relative h-64 overflow-hidden">
              <Image
                width={400}
              height={400}
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop"
                alt="Badminton Championship"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Badminton Championship
              </h3>

              <div className="flex items-center gap-3 text-gray-300 mb-3">
                <IoCalendarClear className="text-cyan-400 text-lg" />
                <span>12 August 2026</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 mb-6">
                <FaLocationDot className="text-cyan-400 text-lg" />
                <span>Mirpur Sports Arena</span>
              </div>

               <Link
  href="/all-facilities"
  className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 active:scale-95 transition-all duration-300 text-black font-semibold shadow-lg shadow-cyan-500/30"
>
  Join Event
</Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition duration-500">
            <div className="relative h-64 overflow-hidden">
              <Image
              width={400}
              height={400}
                src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop"
                alt="Tennis League"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Tennis League
              </h3>

              <div className="flex items-center gap-3 text-gray-300 mb-3">
                <IoCalendarClear className="text-cyan-400 text-lg" />
                <span>05 September 2026</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 mb-6">
                <FaLocationDot className="text-cyan-400 text-lg" />
                <span>Banani Tennis Club</span>
              </div>

                <Link
  href="/all-facilities"
  className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 active:scale-95 transition-all duration-300 text-black font-semibold shadow-lg shadow-cyan-500/30"
>
  Join Event
</Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition duration-500">
            <div className="relative h-64 overflow-hidden">
              <Image
                width={400}
              height={400}
                src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1200&auto=format&fit=crop"
                alt="Swimming Competition"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Swimming Competition
              </h3>

              <div className="flex items-center gap-3 text-gray-300 mb-3">
                <IoCalendarClear className="text-cyan-400 text-lg" />
                <span>18 September 2026</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 mb-6">
                <FaLocationDot className="text-cyan-400 text-lg" />
                <span>Gulshan Aquatic Center</span>
              </div>

             <Link
  href="/all-facilities"
  className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 active:scale-95 transition-all duration-300 text-black font-semibold shadow-lg shadow-cyan-500/30"
>
  Join Event
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;