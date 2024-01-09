// I give up, not enough time, I'm using tailwind components
import React from 'react'

export default function Hero() {
    return (
        <div class="py-24 flex items-center min-h-screen justify-center bg-white">
            <div class="mx-auto max-w-[43rem]">
                <div class="text-center">
                    <p class="text-lg font-medium leading-8 text-blue-600">We understand the struggles of student life.</p>
                    <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Let's turn your academic journey into a success story together.🔥</h1>
                    <p class="mt-3 text-lg leading-relaxed text-slate-400">Our approach is simple yet effective—inspired by the 'Malaysia Boleh' spirit, we've crafted services to help students stop procrastinating.</p>
                </div>

                <div class="mt-6 flex items-center justify-center gap-4">
                    <a href="#" class="transform rounded-md bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Learn More</a>
                    <a href="#" class="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50">Book a Consultation</a>
                </div>
            </div>
        </div>
    )
}
