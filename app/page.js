import { LucideArrowRight, LucideBrain, LucideGlobe, LucideImage, LucideLightbulb, LucideMessageSquare, LucidePersonStanding, LucideStar } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Personal AI Tutor for Academic Excellence
                </h1>
                <p className="text-lg md:text-xl text-blue-100">
                  Etherea uses advanced AI to provide personalized learning experiences, 
                  helping students master concepts across subjects with interactive, 
                  step-by-step guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    Start Learning Now
                    <LucideArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="relative h-[400px] w-full">
                  <Image 
                    src="/images/hero.png" 
                    alt="Student using Etherea AI Tutor"
                    fill
                    className="object-contain rounded-lg shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <LucideStar className="h-5 w-5 text-yellow-400" />
                    <span className="font-bold text-blue-950">4.9/5 Rating</span>
                  </div>
                  <p className="text-sm text-blue-600">from 10,000+ students</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                Powerful Features for Enhanced Learning
              </h2>
              <p className="text-lg text-blue-600 max-w-2xl mx-auto">
                Discover how Etherea transforms the way students learn with cutting-edge AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-blue-50 rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1 border border-blue-100">
                <div className="bg-blue-500 text-white p-3 rounded-xl inline-block mb-4">
                  <LucideBrain className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">LLM Integration</h3>
                <p className="text-blue-700">
                  Powered by advanced language - Gemini with fine-tuned capabilities for academic subjects.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-blue-50 rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1 border border-blue-100">
                <div className="bg-blue-500 text-white p-3 rounded-xl inline-block mb-4">
                  <LucideImage className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Multimodal Learning</h3>
                <p className="text-blue-700">
                  Upload handwritten notes, textbook pages, or diagrams for instant explanations and convert handwriting to digital text.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-blue-50 rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1 border border-blue-100">
                <div className="bg-blue-500 text-white p-3 rounded-xl inline-block mb-4">
                  <LucideLightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Intelligent Tutoring</h3>
                <p className="text-blue-700">
                  Step-by-step explanations for problem-solving in Math, Physics, and Chemistry with conceptual breakdowns.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-blue-50 rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1 border border-blue-100">
                <div className="bg-blue-500 text-white p-3 rounded-xl inline-block mb-4">
                  <LucidePersonStanding className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Personalized Learning</h3>
                <p className="text-blue-700">
                  Adaptive explanations based on grade level and learning speed with progress tracking and suggested practice.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-blue-50 rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1 border border-blue-100">
                <div className="bg-blue-500 text-white p-3 rounded-xl inline-block mb-4">
                  <LucideGlobe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Multilingual Support</h3>
                <p className="text-blue-700">
                  Communicate in multiple languages with text-to-speech and speech-to-text capabilities for better engagement.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-blue-50 rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1 border border-blue-100">
                <div className="bg-blue-500 text-white p-3 rounded-xl inline-block mb-4">
                  <LucideMessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Interactive Engagement</h3>
                <p className="text-blue-700">
                  Gamification elements like badges and rewards with real-time doubt resolution for immediate explanations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                What Students Say
              </h2>
              <p className="text-lg text-blue-600 max-w-2xl mx-auto">
                Hear from students who have transformed their learning experience with Etherea
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="flex items-center gap-1 mb-4 text-yellow-400">
                  <LucideStar className="h-5 w-5 fill-current" />
                  <LucideStar className="h-5 w-5 fill-current" />
                  <LucideStar className="h-5 w-5 fill-current" />
                  <LucideStar className="h-5 w-5 fill-current" />
                  <LucideStar className="h-5 w-5 fill-current" />
                </div>
                <p className="text-blue-700 mb-6">
                  "Etherea helped me understand calculus when I was struggling. The step-by-step explanations made complex problems so much clearer!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-200 overflow-hidden relative">
                    <Image 
                      src="/images/p1.png" 
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">Arun</h4>
                    <p className="text-sm text-blue-500">High School Student</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="flex items-center gap-1 mb-4 text-yellow-400">
                  <LucideStar className="h-5 w-5 fill-current" />
                  <LucideStar className="h-5 w-5 fill-current" />
                  <LucideStar className="h-5 w-5 fill-current" />
                  <LucideStar className="h-5 w-5 fill-current" />
                  <LucideStar className="h-5 w-5 fill-current" />
                </div>
                <p className="text-blue-700 mb-6">
                  "I love that I can upload pictures of my homework and get instant help. The multilingual support is amazing since English isn't my first language!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-200 overflow-hidden relative">
                    <Image 
                      src="/images/p2.png" 
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">Sushanth</h4>
                    <p className="text-sm text-blue-500">Middle School Student</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="flex items-center gap-1 mb-4 text-yellow-400">
                  <LucideStar className="h-5 w-5 fill-current" />
                  <LucideStar className="h-5 w-5 fill-current" />
                  <LucideStar className="h-5 w-5 fill-current" />
                  <LucideStar className="h-5 w-5 fill-current" />
                  <LucideStar className="h-5 w-5 fill-current" />
                </div>
                <p className="text-blue-700 mb-6">
                  "The personalized learning path helped me improve my grades in science. I love earning badges when I master new concepts!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-200 overflow-hidden relative">
                    <Image 
                      src="/images/p3.png" 
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">Joel</h4>
                    <p className="text-sm text-blue-500">Elementary Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Learning Experience?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are achieving academic excellence with Etherea
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center gap-2">
              Get Started for Free
              <LucideArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-500 text-white p-2 rounded-lg">
                  <LucideBrain className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold">Etherea</span>
              </div>
              <p className="text-blue-300">
                Transforming education through AI-powered personalized learning experiences.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Features</h3>
              <ul className="space-y-2 text-blue-300">
                <li><Link href="#" className="hover:text-white transition-colors">LLM Integration</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Multimodal Learning</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Intelligent Tutoring</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Personalized Learning</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-blue-300">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-blue-300">
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm">
              © {new Date().getFullYear()} Etherea. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
