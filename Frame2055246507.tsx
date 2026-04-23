import React, { useState } from "react";
import svgPaths from "./svg-40rcs3ko1w";
import imgImage1090 from "figma:asset/cac80436913b39e141f515a754f4c1e69035b6e0.png";
import imgIconImage from "figma:asset/fcde84f22911784fbaa6b53a636c56404d3c740b.png";
import imgIconImage1 from "figma:asset/23da8925589e3c10b29dd5b6981ef90728a49a98.png";
import imgIconImage2 from "figma:asset/a149841b81c128f96f1b2453dfaf30f829ab2a97.png";

function NavBar({ onHomeClick }: { onHomeClick?: () => void }) {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex gap-[30px] items-center opacity-70 p-[8px] relative rounded-[50px] shrink-0" data-name="nav bar">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-135px)] size-[67.895px] top-1/2" data-name="select">
        <div className="absolute border-3 border-black border-solid inset-0 rounded-[37px]" data-name="Icon background" />
      </div>
      <div className="overflow-clip relative shrink-0 size-[60px] cursor-pointer" data-name="home" onClick={onHomeClick}>
        <div className="absolute h-[26.052px] left-[18.15px] top-[13.97px] w-[23.694px]" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6943 26.0525">
            <path d={svgPaths.p5c30780} fill="var(--fill-0, black)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[10px] shrink-0 size-[60px]" data-name="folder">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.517px] left-[calc(50%-0.04px)] top-[calc(50%-0.88px)] w-[27.961px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9609 20.5168">
            <path d={svgPaths.p2b67a400} fill="var(--fill-0, black)" id="Rectangle 3473639" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[60px]" data-name="settings">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[28.381px] left-[calc(50%+0.04px)] top-[calc(50%+0.49px)] w-[27.738px]" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.7376 28.3809">
            <path d={svgPaths.p2615da00} fill="var(--fill-0, black)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[10px] shrink-0 size-[60px]" data-name="apps">
        <div className="absolute border-3 border-black border-solid left-[13.82px] rounded-[18px] size-[32.18px] top-[13.82px]" />
        <div className="absolute left-[21.92px] size-[3.481px] top-[28.12px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.48093 3.48093">
            <circle cx="1.74047" cy="1.74047" fill="var(--fill-0, black)" id="Ellipse 91" r="1.24047" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
        <div className="absolute left-[28.29px] size-[3.481px] top-[28.12px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.48093 3.48093">
            <circle cx="1.74047" cy="1.74047" fill="var(--fill-0, black)" id="Ellipse 91" r="1.24047" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
        <div className="absolute left-[34.67px] size-[3.481px] top-[28.12px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.48093 3.48093">
            <circle cx="1.74047" cy="1.74047" fill="var(--fill-0, black)" id="Ellipse 91" r="1.24047" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative size-[24.063px]" data-name="Search Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0629 24.0635">
        <g id="Search Icon">
          <path d={svgPaths.p26770a00} fill="var(--fill-0, white)" id="Intersect" />
          <path d={svgPaths.p331e6900} fill="var(--fill-0, white)" id="Intersect_2" />
          <path d={svgPaths.p217e4300} fill="var(--fill-0, white)" id="Intersect_3" />
          <path d={svgPaths.p32be7af0} fill="var(--fill-0, white)" id="Intersect_4" />
        </g>
      </svg>
    </div>
  );
}

function SearchText({ value, onChange, onFocus, onBlur, isFocused, inputRef, onKeyDown }: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  const showPlaceholder = value === "";
  const placeholderOpacity = isFocused ? "opacity-20" : "opacity-100";

  return (
    <div className="content-stretch flex items-center relative shrink-0 flex-1" data-name="Search Text">
      <div className="flex flex-col font-['Forma_DJR_UI:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-white whitespace-nowrap w-full">
        <div className="relative font-['Manrope',sans-serif] font-normal not-italic text-[24.951px]">
          {showPlaceholder && (
            <p className={`absolute left-0 top-0 pointer-events-none transition-opacity duration-200 ${placeholderOpacity}`}>
              <span className="leading-[1.5]">|</span>
              <span className="leading-[1.5] text-white">Ask Anything</span>
            </p>
          )}
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            className="bg-transparent border-none outline-none text-white font-['Manrope',sans-serif] font-normal text-[24.951px] leading-[1.5] w-full"
            style={{ caretColor: 'white' }}
          />
        </div>
      </div>
    </div>
  );
}

function SearchBar({ value, onChange, onFocus, onBlur, isFocused, inputRef, onKeyDown }: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="absolute content-stretch flex gap-[27px] items-center left-[23px] py-[5.545px] top-[10.96px] right-[180px]" data-name="Search Bar">
      <div className="flex items-center justify-center relative shrink-0 size-[34.03px]" style={{ "--transform-inner-width": "1201", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <SearchIcon />
        </div>
      </div>
      <SearchText value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} isFocused={isFocused} inputRef={inputRef} onKeyDown={onKeyDown} />
    </div>
  );
}

function AttachFile() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 size-[27.724px]" data-name="attach_file">
      <div className="overflow-clip relative shrink-0 size-[27.724px]" data-name="Icon">
        <div className="absolute inset-[4.17%_27.08%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7068 25.4135">
            <path d={svgPaths.p1451e200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function UtilityIcon() {
  return (
    <div className="content-stretch flex items-center p-[13.862px] relative shrink-0" data-name="Utility Icon">
      <AttachFile />
    </div>
  );
}

function MicrophoneOutline() {
  return (
    <div className="absolute h-[25.489px] left-[12.42px] top-[6.66px] w-[13.965px]" data-name="Microphone Outline">
      <div className="absolute inset-[0_-6.37%_-3.5%_-6.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7454 26.3804">
          <g id="Microphone Outline">
            <rect fill="var(--fill-0, white)" height="17.3484" id="Microphone Button" rx="4.33131" width="8.66262" x="3.54139" />
            <path d={svgPaths.pe5ae380} id="Vector 638" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.78069" />
            <path d={svgPaths.p20600280} id="Vector 639" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.78069" />
            <path d={svgPaths.p20b1de00} id="Vector 640" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.78069" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Microphone() {
  return (
    <div className="overflow-clip relative shrink-0 size-[38.813px]" data-name="Microphone">
      <MicrophoneOutline />
    </div>
  );
}

function UtilityIcon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[499.029px] shrink-0 size-[52.675px]" data-name="Utility Icon">
      <Microphone />
    </div>
  );
}

function DeltaForward() {
  return (
    <div className="relative shrink-0 size-[32.601px]" data-name="Delta Forward">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.6015 32.6015">
        <g id="Delta Forward">
          <path d={svgPaths.p16c30380} fill="var(--fill-0, white)" id="Rectangle 3473604" />
        </g>
      </svg>
    </div>
  );
}

function UtilityIcon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[499.029px] shrink-0 size-[52.675px]" data-name="Utility Icon">
      <DeltaForward />
    </div>
  );
}

function Utilities() {
  return (
    <div className="absolute content-stretch flex items-center left-[646.18px] top-[7.43px]" data-name="Utilities">
      <UtilityIcon />
      <UtilityIcon1 />
      <UtilityIcon2 />
    </div>
  );
}

function Miro() {
  return (
    <div className="bg-[rgba(255,221,53,0.5)] overflow-clip relative rounded-[100px] shrink-0 size-[60px]" data-name="miro">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[49.085px] left-1/2 top-[calc(50%+1.23px)] w-[48.978px]" data-name="image 1090">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="49.085" src={imgImage1090} width="48.978" />
      </div>
    </div>
  );
}

function Teams() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] overflow-clip relative rounded-[100px] shrink-0 size-[60px]" data-name="teams">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[60px] items-center justify-center left-1/2 top-1/2 w-[64.51px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[60px] relative rounded-[60px] w-[64.51px]" data-name="Icon Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[60px]">
              <img alt="" className="absolute left-[20.46%] max-w-none size-[59.08%] top-[20.46%]" src={imgIconImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Outlook() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] overflow-clip relative rounded-[100px] shrink-0 size-[60px]" data-name="outlook">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[60px] size-[54.344px] top-1/2" data-name="Icon Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[60px]">
          <img alt="" className="absolute left-[14.28%] max-w-none size-[71.44%] top-[14.28%]" src={imgIconImage1} />
        </div>
      </div>
    </div>
  );
}

function Powerpoint() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] overflow-clip relative rounded-[100px] shrink-0 size-[60px]" data-name="powerpoint">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[55.66px] left-[calc(50%-1.06px)] rounded-[60px] top-1/2 w-[54.694px]" data-name="Icon Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[60px]">
          <img alt="" className="absolute h-[53.64%] left-[6.33%] max-w-none top-[23.18%] w-[87.33%]" src={imgIconImage2} />
        </div>
      </div>
    </div>
  );
}

function FrequentApps() {
  return (
    <div className="content-stretch flex gap-[33px] items-center relative shrink-0" data-name="frequent apps">
      <Miro />
      <Teams />
      <Outlook />
      <Powerpoint />
    </div>
  );
}

export default function Frame({ onNavigateToAgents, onNavigateToGrid }: { onNavigateToAgents?: () => void; onNavigateToGrid?: () => void }) {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChatBoxClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const lowerInput = inputValue.toLowerCase();
      const hasCreate = lowerInput.includes("create");
      const hasQ3 = lowerInput.includes("q3");
      const hasSummary = lowerInput.includes("summary");

      if (hasCreate && hasQ3 && hasSummary && onNavigateToAgents) {
        onNavigateToAgents();
      }
    }
  };

  return (
    <div className="content-stretch flex items-center justify-between px-[40px] relative size-full">
      <NavBar onHomeClick={onNavigateToGrid} />
      <div
        className="bg-[rgba(0,0,0,0.5)] h-[70px] overflow-clip relative rounded-[100px] shrink-0 w-[846px] cursor-text"
        data-name="ai chat"
        onClick={handleChatBoxClick}
      >
        <SearchBar
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isFocused={isFocused}
          inputRef={inputRef}
          onKeyDown={handleKeyDown}
        />
        <Utilities />
      </div>
      <FrequentApps />
    </div>
  );
}