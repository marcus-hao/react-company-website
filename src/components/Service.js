import React from 'react'

// I give up, not enough time, i'm gonna use tailwind components
export default function Service() {
    return (
        <div id='services'>
            <div class="bg-gray-100 min-h-screen py-12">
                <h1 class="text-4xl font-bold mb-8 text-blue-900">Our Services</h1>
                <div class="flex items-center justify-center">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                            <div class="p-1 bg-blue-900">
                            </div>
                            <div class="p-8">
                                <h2 class="text-3xl font-bold text-gray-800 mb-4">Procrastination Assessment</h2>
                                <p class="text-gray-600 mb-6">Say no to "later"</p>
                                <p class="text-4xl font-bold text-gray-800 mb-6">RM49.99</p>
                                <ul class="text-sm text-gray-600 mb-6">
                                    <li class="mb-2 flex items-center">
                                        <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Personalized analysis
                                    </li>
                                    <li class="mb-2 flex items-center">
                                        <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Tailored strategies
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4">
                                <button
                                    class="w-full bg-blue-800 text-white rounded-full px-4 py-2 hover:bg-blue-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                                    Buy plan
                                </button>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                            <div class="p-1 bg-blue-900">
                            </div>
                            <div class="p-8">
                                <h2 class="text-3xl font-bold text-gray-800 mb-4">Personalized Study Plans</h2>
                                <p class="text-gray-600 mb-6">Time management made easy</p>
                                <p class="text-4xl font-bold text-gray-800 mb-6">RM69.99</p>
                                <ul class="text-sm text-gray-600 mb-6">
                                    <li class="mb-2 flex items-center">
                                        <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Custom schedules
                                    </li>
                                    <li class="mb-2 flex items-center">
                                        <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Goal-oriented planning
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4">
                                <button
                                    class="w-full bg-blue-800 text-white rounded-full px-4 py-2 hover:bg-blue-900 focus:outline-none focus:shadow-outline-green active:bg-blue-800">
                                    Buy plan
                                </button>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                            <div class="p-1 bg-blue-900">
                            </div>
                            <div class="p-8">
                                <h2 class="text-3xl font-bold text-gray-800 mb-4">Study Skills Workshop</h2>
                                <p class="text-gray-600 mb-6">Exam tips and tricks</p>
                                <p class="text-4xl font-bold text-gray-800 mb-6">RM99.99</p>
                                <ul class="text-sm text-gray-600 mb-6">
                                    <li class="mb-2 flex items-center">
                                        <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Interactive sessions
                                    </li>
                                    <li class="mb-2 flex items-center">
                                        <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http

://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Essential study skills
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4">
                                <button
                                    class="w-full bg-blue-800 text-white rounded-full px-4 py-2 hover:bg-blue-900 focus:outline-none focus:shadow-outline-purple active:bg-blue-800">
                                    Buy plan
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
