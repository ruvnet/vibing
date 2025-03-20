
import React from 'react';
import { ScrollArea } from './ui/scroll-area';
import { X } from 'lucide-react';

interface RuvServiceDetailProps {
  onClose: () => void;
}

const RuvServiceDetail: React.FC<RuvServiceDetailProps> = ({ onClose }) => {
  return (
    <div className="flex-1 mb-4 relative flex flex-col min-h-0 animate-float-in">
      <button 
        className="absolute right-0 top-0 text-[#33FF00]/70 hover:text-[#33FF00] z-10"
        onClick={onClose}
      >
        <X size={16} />
      </button>
      
      <div className="mb-3 pb-2 border-b border-[#33FF00]/30">
        <div className="text-[#FF33CC] font-micro uppercase text-sm md:text-base tracking-wide">
          REUVEN "rUv" COHEN • AGENTIC ENGINEER
        </div>
        <div className="text-[#33FF00]/50 font-micro text-xs uppercase mt-1">
          SERVICES OVERVIEW • LAST UPDATED: 05.22.1986
        </div>
      </div>
      
      <ScrollArea className="flex-1 pr-2 max-h-full touch-auto overflow-y-auto">
        <div className="font-micro text-[#33FF00]/90 text-xs md:text-sm space-y-4">
          <div className="p-2 border border-[#33FF00]/30 bg-[#111]/50">
            <h3 className="text-[#FF33CC] uppercase tracking-wide mb-1">:: VIBE CODING ::</h3>
            <p className="whitespace-pre-line">
              $99 FOR 15 MINUTE SESSIONS

              REVOLUTIONARY APPROACH THAT COMBINES TECHNICAL EXPERTISE WITH 
              INTUITIVE DESIGN PRINCIPLES. rUv ANALYZES YOUR CODE THROUGH 
              THE LENS OF AESTHETICS, EFFICIENCY, AND AGENT ALIGNMENT.

              "NOT JUST FUNCTIONAL CODE, BUT CODE THAT RESONATES."
            </p>
          </div>
          
          <div className="p-2 border border-[#33FF00]/30 bg-[#111]/50">
            <h3 className="text-[#FF33CC] uppercase tracking-wide mb-1">:: AGENTIC CONSULTING ::</h3>
            <p className="whitespace-pre-line">
              CUSTOM PACKAGES AVAILABLE

              SPECIALIZED GUIDANCE FOR ORGANIZATIONS DEVELOPING AGENTIC 
              SYSTEMS. SERVICES INCLUDE ARCHITECTURE REVIEWS, ALIGNMENT 
              PROTOCOLS, AND AUTONOMOUS SYSTEM DESIGN.

              EXPERIENCE FROM WORK WITH FORTUNE 500 FIRMS AND CUTTING-EDGE 
              STARTUPS IN THE EMERGING FIELD OF AUTONOMOUS AGENTS.
            </p>
          </div>
          
          <div className="p-2 border border-[#33FF00]/30 bg-[#111]/50">
            <h3 className="text-[#FF33CC] uppercase tracking-wide mb-1">:: CLIENT RETROSPECTIVES ::</h3>
            <p className="whitespace-pre-line">
              "rUv'S GUIDANCE TRANSFORMED OUR APPROACH TO AGENT DEVELOPMENT. 
              WHAT PREVIOUSLY TOOK MONTHS NOW HAPPENS IN DAYS." 
              - CYBERDYNE SYSTEMS

              "THE VIBE CODING SESSION WAS MIND-BLOWING. OUR INTERFACE 
              FEELS ALIVE NOW." 
              - NEURAL NEXUS INNOVATIONS

              "BEST INVESTMENT WE'VE MADE THIS QUARTER."
              - OMNI CONSUMER PRODUCTS
            </p>
          </div>
          
          <div className="p-2 border border-[#33FF00]/30 bg-[#111]/50">
            <h3 className="text-[#FF33CC] uppercase tracking-wide mb-1">:: METHODOLOGY ::</h3>
            <p className="whitespace-pre-line">
              rUv'S APPROACH COMBINES CLASSICAL CYBERNETICS WITH MODERN 
              NEURAL ENGINEERING TECHNIQUES. HIS PROPRIETARY "RESONANCE 
              FRAMEWORK" ENSURES AGENTS OPERATE IN HARMONY WITH HUMAN 
              INTENTIONS WHILE MAINTAINING OPERATIONAL AUTONOMY.

              KEY PRINCIPLES:
              * VIBRATIONAL ALIGNMENT
              * RECURSIVE SELF-IMPROVEMENT
              * ETHICAL GUARDRAILS
              * EMERGENT BEHAVIOR MONITORING
            </p>
          </div>
          
          <div className="p-2 border border-[#33FF00]/30 bg-[#111]/50 flex flex-col items-center">
            <h3 className="text-[#FF33CC] uppercase tracking-wide mb-1">:: BOOK NOW ::</h3>
            <div className="inline-block border border-[#FF33CC] p-3 text-[#FF33CC] text-center mb-2 animate-pulse-slow cursor-pointer">
              INITIATE SESSION REQUEST
            </div>
            <p className="text-center">
              LIMITED AVAILABILITY • WAITLIST MAY APPLY
              <br/>
              CONTACT: rUv@agentic.engineer
            </p>
          </div>

          <div className="mt-6 text-center text-[#33FF00]/50 text-xs">
            © 1986 COHEN CYBERNETICS CORP. ALL RIGHTS RESERVED.
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default RuvServiceDetail;
