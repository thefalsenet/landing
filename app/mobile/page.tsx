import { Icons } from "@/components/icons";
import LightRays from "@/components/LightRays/LightRays";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Mobile() {
     return <div className="h-screen w-screen !dark">
          <LightRays raysOrigin="top-center"
               raysColor="#fff"
               raysSpeed={1.5}
               lightSpread={0.8}
               rayLength={1.2}
               followMouse={true}
               mouseInfluence={0.1}
               noiseAmount={0.1}
               distortion={0.05}
               className="custom-rays" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4">
               <div className="flex items-center gap-2">
                    <Icons.logo className="size-12" />
                    <Badge className="h-8 px-4 text-xl" >mobile</Badge>
               </div>

               <div>
                    <h1 className="text-4xl font-bold text-balance text-center">Your Books. Your Thoughts. Anywhere.</h1>
                    <p className="text-2xl text-muted-foreground text-center">sign up for early access and be part of the first wave of readers.</p>
               </div>

               <div id="waitlist" className="fixed sm:absolute 2xl:static sm:scale-125 z-1000 flex flex-col items-center bottom-10 transition-all duration-800 ease-in-out waitlist-fade-up">
                    <form className="relative w-fit max-w-[570px]">
                         <label htmlFor="agent-waitlist-form" className="sr-only">Email address for mobile waitlist</label>
                         <div className="relative flex flex-row w-[336px] sm:w-[324px] justify-between transition-all duration-500 ease-out" style={{ minHeight: "36px" }}>
                              <Input
                                   data-slot="input"
                                   className="file:text-gray-1000 selection:bg-background-100 selection:text-gray-1000 flex min-w-0 px-3 py-1 text-base shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 bg-input border border-foreground !text-[16px] sm:!text-[14px] placeholder:text-muted-foreground pl-[15px] focus-visible:border-foreground focus-visible:ring-none focus-visible:ring-0 h-[46px] sm:h-9 transition-all w-70 duration-500 ease-out flex-shrink-0"
                                   placeholder="Join the waitlist…"
                                   autoCapitalize="off"
                                   spellCheck={false}
                                   id="agent-waitlist-form"
                                   tabIndex={0}
                                   autoComplete="off"
                                   data-1p-ignore="true"
                                   data-lpignore="true"
                                   data-form-type="other"
                                   style={{ visibility: "visible" }}
                                   aria-invalid={false}
                                   aria-label="Email address for mobile waitlist"
                                   aria-required={true}
                                   name="not-search"
                              />
                              <Button
                                   type="submit"
                                   disabled={false}
                                   tabIndex={0}
                                   className="cursor-pointer h-12 sm:h-9 flex items-center justify-center bg-primary text-primary-foreground disabled:bg-gray-200 dark:disabled:bg-[#333333] dark:disabled:text-white disabled:text-black transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 z-10 w-12 sm:w-9"
                                   aria-label="Submit email to join mobile waitlist"
                              >
                                   <svg className="absolute transition-all duration-700 ease-out scale-100 opacity-100" data-testid="geist-icon" height="16" strokeLinejoin="round" style={{ color: "currentColor" }} viewBox="0 0 16 16" width="16">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z" fill="currentColor" />
                                   </svg>
                                   <div className="flex items-center gap-1 opacity-0 blur-[6px]">
                                        <svg width="22" height="22" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M4.5 8.5L7.5 11L12.5 5.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="16" strokeDashoffset="16" style={{ transition: "stroke-dashoffset 0.5s" }} className="text-black dark:text-white" />
                                        </svg>
                                        <span className="font-medium text-sm">
                                             <span className="inline-block transition-all duration-500 opacity-0 blur-xs" style={{ transitionDelay: "400ms" }}>You&apos;re</span>
                                             <span className="inline-block transition-all duration-500 opacity-0 blur-xs" style={{ transitionDelay: "500ms" }}>on</span>
                                             <span className="inline-block transition-all duration-500 opacity-0 blur-xs" style={{ transitionDelay: "600ms" }}>the</span>
                                             <span className="inline-block transition-all duration-500 opacity-0 blur-xs" style={{ transitionDelay: "700ms" }}>waitlist.</span>
                                        </span>
                                   </div>
                              </Button>
                         </div>
                         <div className="absolute -bottom-8.5 sm:-bottom-5 w-full flex items-center justify-center h-8" aria-live="polite">
                              <div id="error-message" className="flex gap-2 items-center justify-center absolute transition-all duration-300 invisible sm:opacity-0 sm:scale-95 sm:translate-y-0" role="alert" aria-atomic="true">
                                   <span className="text-[11px] font-semibold text-red-700"></span>
                              </div>
                         </div>
                    </form>
               </div>
          </div>
     </div>
}