'use client'
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import { EyeIcon, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaTriangleExclamation } from 'react-icons/fa6';

const BookingButtons = ({ booking }) => {
    const route = useRouter();

    const handlebooking_del = async () => {
        const{data: tokenData}=await authClient.token()
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/bookings/${booking._id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json',
                    authorization:`Bearer ${tokenData?.token}`
                },
            });
            
            // Safe verification check before updating UI context
            if (res.ok) {
                route.refresh();
            }
        } catch (error) {
            console.error("Error canceling booking:", error);
        }
    };

    return (
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 w-full sm:w-auto">
                
                {/* MATCHED DELETE ALERT MODAL */}
                <AlertDialog>
                    {/* Trigger Button */}
                    <Button
                        variant="light"
                        className="text-red-400 cursor-pointer border border-red-950/40 hover:bg-red-950/30 font-medium px-4 py-2 rounded-xl flex gap-2"
                    >
                        <Trash2 size={16} />
                        Cancel
                    </Button>

                    {/* Backdrop */}
                    <AlertDialog.Backdrop className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md">
                        <AlertDialog.Container>
                            <AlertDialog.Dialog className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-6 w-[400px]">

                                <AlertDialog.Header className="text-center">
                                    <FaTriangleExclamation className="text-red-500 text-4xl mx-auto" />

                                    <AlertDialog.Heading className="text-xl font-bold mt-3">
                                        Cancel Booking?
                                    </AlertDialog.Heading>
                                </AlertDialog.Header>

                                <AlertDialog.Body className="text-center mt-3 text-slate-400 text-sm">
                                    This action cannot be undone.
                                </AlertDialog.Body>

                                <div className="font-bold text-white text-center mt-2">
                                    {booking.des_name || booking.facility_name}
                                </div>

                                <AlertDialog.Footer className="flex flex-col gap-2 mt-6">
                                    <Button
                                        color="danger"
                                        className="bg-red-500 border-none p-0 min-w-0 h-auto shadow-none text-white hover:bg-red-600 hover:scale-95 duration-300 cursor-pointer font-medium transition-colors"
                                        onPress={handlebooking_del}
                                    >
                                        Yes, Cancel Booking
                                    </Button>

                                    <Button 
  variant="light" 
  slot="close" 
  className="bg-white border-none p-0 min-w-0 h-auto shadow-none text-black hover:text-cyan-500 hover:scale-95 duration-300 cursor-pointer font-medium transition-colors"
>
  Cancel
</Button>
                                </AlertDialog.Footer>

                            </AlertDialog.Dialog>
                        </AlertDialog.Container>
                    </AlertDialog.Backdrop>
                </AlertDialog>

                {/* View Button */}
                <Link 
                    href={`/All-Facilities/${booking.facility_id}`} 
                    className="flex items-center justify-center px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all text-sm font-semibold h-[40px] gap-2"
                >
                    <EyeIcon size={16} />
                    View
                </Link>
            </div>
        </div>
    );
};

export default BookingButtons;