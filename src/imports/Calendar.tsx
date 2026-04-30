import StubCell from "./StubCell";

// Image assets
const imgEllipse55FS = "https://www.figma.com/api/mcp/asset/879aecb4-4ac1-4672-beda-86dfbf5788e3";
const imgVector55FS = "https://www.figma.com/api/mcp/asset/eed7c05b-9284-4958-a849-09f855f2f241";

const imgEllipse55HL = "https://www.figma.com/api/mcp/asset/e78b938a-1a73-4817-84f0-5e16a321a35d";
const imgVector55HL = "https://www.figma.com/api/mcp/asset/45fc565e-78ab-4df0-b428-0aa5ff8b4a69";

const imgEllipse55QW = "https://www.figma.com/api/mcp/asset/d0efc6a9-18bc-41bd-b529-ef6a50bc4a9a";
const imgVector55QW = "https://www.figma.com/api/mcp/asset/17f44066-b5f1-470a-9eeb-413c7d76c4d9";

const imgEllipse55QL = "https://www.figma.com/api/mcp/asset/5f5e560e-e3e1-470c-9b1a-3b000ee3ca83";
const imgVector55QL = "https://www.figma.com/api/mcp/asset/3df5b45a-6691-4e77-965f-1761c7412ca8";

const imgEllipse55EL = "https://www.figma.com/api/mcp/asset/f8b81cc4-67dd-4b63-9700-dc623910af99";
const imgVector55EL = "https://www.figma.com/api/mcp/asset/3deec5d1-2518-4489-88fb-97e82229d0ea";

const imgEllipse55TXL = "https://www.figma.com/api/mcp/asset/df699fd7-f8d5-4201-bdbc-10bf148b0005";
const imgVector55TXL = "https://www.figma.com/api/mcp/asset/0104cf25-d680-4954-9582-e1591237974a";

export type CalendarSize =
  // Designed variants (from Figma 34:17309):
  | "full screen"           //  1840 × 1000
  | "half long"             //   910 × 1000
  | "quarter wide"          //   910 ×  490
  | "quarter long"          //   455 × 1000
  | "eighth long"           //   455 ×  490
  | "sixteenth"             //   455 ×  245
  | "three sixteenth"       //   455 ×  734
  // Grid-system variants (stubs — pending Figma design):
  | "half wide"             //  1840 ×  490
  | "eighth wide"           //  1840 ×  245
  | "three quarter wide"    //  1840 ×  735
  | "three quarter long"    //  1365 × 1000
  | "three quarter half"    //  1365 ×  490
  | "three quarter short"   //  1365 ×  244
  | "three quarter tall"    //  1365 ×  734
  | "half short"            //   910 ×  245
  | "half tall";            //   910 ×  735

interface Props {
  size?: CalendarSize;
  className?: string;
}

function CalendarFullScreen({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-[#001a4e] h-[1000px] overflow-clip relative rounded-[61.66px] w-[1840px]"}
      data-name="calendar full screen"
    >
      <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[14.581px] text-white top-[64.96px] whitespace-nowrap">
        Today's Schedule
      </p>
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[48.604px] text-white top-[82.41px] whitespace-nowrap">
        April 1, 2026
      </p>
      <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[374.65px] not-italic opacity-80 text-[36.453px] text-white top-[89.41px] whitespace-nowrap">
        Wednesday
      </p>
      <div className="absolute contents left-[53.54px] top-[226.89px]">
        <div className="absolute h-[1081.97px] left-[1559.93px] opacity-50 overflow-clip top-[226.89px] w-[226.836px]">
          <div className="absolute bg-[rgba(217,217,217,0)] border-[rgba(255,255,255,0.2)] border-l-[0.903px] border-solid h-[1081.97px] left-0 top-0 w-[226.836px]" />
          <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[113.99px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
            Sat
          </p>
          <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[113.84px] not-italic text-[18.055px] text-center text-white top-[21.27px] whitespace-nowrap">
            7
          </p>
        </div>
        <div className="absolute h-[1081.97px] left-[198.92px] opacity-50 overflow-clip top-[226.89px] w-[226.836px]">
          <div className="absolute bg-[rgba(217,217,217,0)] border-[rgba(255,255,255,0.2)] border-l-[0.903px] border-solid h-[1081.97px] left-0 top-0 w-[226.836px]" />
          <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[113.8px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
            Sun
          </p>
          <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[113.35px] not-italic text-[18.055px] text-center text-white top-[21.27px] whitespace-nowrap">
            1
          </p>
        </div>
        <div className="absolute h-[1081.97px] left-[53.54px] overflow-clip top-[226.89px] w-[145.385px]">
          <div className="absolute contents left-0 top-0">
            <div className="absolute bg-[rgba(217,217,217,0)] h-[1081.97px] left-0 top-0 w-[145.385px]" />
            <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[72.84px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
              UTC+9
            </p>
            <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[72.46px] not-italic text-[18.055px] text-center text-white top-[27.59px] whitespace-nowrap">
              Seoul
            </p>
          </div>
          <div className="absolute contents font-['Gotham:Medium',sans-serif] leading-[normal] left-[46.96px] not-italic text-[14.444px] text-white top-[141.58px] whitespace-nowrap">
            {["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"].map((time, i) => (
              <p key={i} className="absolute left-[46.96px]" style={{ top: `${141.58 + i * 84.85}px` }}>
                {time}
              </p>
            ))}
          </div>
        </div>
        <div className="absolute h-[1081.97px] left-[1333.1px] opacity-50 overflow-clip top-[226.89px] w-[226.836px]">
          <div className="absolute contents left-0 top-0">
            <div className="absolute bg-[rgba(217,217,217,0)] border-[rgba(255,255,255,0.2)] border-l-[0.903px] border-solid h-[1081.97px] left-0 top-0 w-[226.836px]" />
            <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[112.73px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
              Fri
            </p>
            <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[112.29px] not-italic text-[18.055px] text-center text-white top-[21.27px] whitespace-nowrap">
              6
            </p>
          </div>
          <div className="absolute contents left-[17.26px] top-[311.29px]">
            <div className="absolute bg-white h-[274.76px] left-[17.26px] opacity-10 rounded-[24.062px] shadow-[0px_12.638px_32.769px_0px_rgba(0,0,0,0.1)] top-[311.29px] w-[192.33px]" />
            <div className="absolute contents left-[44.13px] top-[340.34px]">
              <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[44.13px] not-italic text-[16.249px] text-white top-[364.77px] w-[138.738px]">
                Managers sync meeting
              </p>
              <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[44.13px] not-italic text-[7.222px] text-white top-[340.34px] whitespace-nowrap">
                10 am - 1 pm
              </p>
              <div className="absolute contents font-['Gotham:Light',sans-serif] leading-[normal] left-[44.13px] not-italic text-white top-[455.71px] whitespace-nowrap">
                <div className="absolute contents left-[44.14px] text-[7.222px] top-[471.21px]">
                  <p className="absolute left-[44.14px] opacity-50 top-[482.31px]">Kyu, Tim, Todd, Kibok</p>
                  <p className="absolute left-[44.14px] opacity-50 top-[471.21px]">PS managers</p>
                </div>
                <p className="absolute left-[44.13px] text-[9.027px] top-[455.71px]">Conference meeting room 1</p>
              </div>
              <div className="absolute contents left-[44.13px] top-[419.84px]">
                <div className="absolute bg-white border-[0.451px] border-solid border-white h-[17.816px] left-[44.13px] opacity-20 rounded-[6.016px] shadow-[0px_3.611px_3.611px_0px_rgba(0,0,0,0.1)] top-[419.84px] w-[53.448px]" />
                <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[52.8px] not-italic text-[5.416px] text-white top-[425.59px] whitespace-nowrap">
                  Join meeting
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[1081.97px] left-[879.43px] opacity-50 overflow-clip top-[226.89px] w-[226.836px]">
          <div className="absolute contents left-0 top-0">
            <div className="absolute bg-[rgba(217,217,217,0)] border-[rgba(255,255,255,0.2)] border-l-[0.903px] border-solid h-[1081.97px] left-0 top-0 w-[226.836px]" />
            <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[114.13px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
              Wed
            </p>
            <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[113.29px] not-italic text-[18.055px] text-center text-white top-[21.27px] whitespace-nowrap">
              4
            </p>
          </div>
          <div className="absolute contents left-[17.26px] top-[226.43px]">
            <div className="absolute bg-white h-[529.329px] left-[17.26px] opacity-10 rounded-[24.062px] shadow-[0px_12.638px_32.769px_0px_rgba(0,0,0,0.1)] top-[226.43px] w-[192.33px]" />
            <div className="absolute contents leading-[normal] left-[44.63px] not-italic text-white top-[255.48px]">
              <p className="absolute font-['Gotham:Medium',sans-serif] left-[44.63px] text-[16.249px] top-[279.92px] w-[138.738px]">
                Company team building worksop
              </p>
              <p className="absolute font-['Gotham:Light',sans-serif] left-[44.63px] text-[7.222px] top-[255.48px] whitespace-nowrap">
                10 am - 1 pm
              </p>
              <div className="absolute contents font-['Gotham:Light',sans-serif] left-[44.63px] top-[357.55px] whitespace-nowrap">
                <div className="absolute contents left-[44.64px] text-[7.222px] top-[373.06px]">
                  <p className="absolute left-[44.64px] opacity-50 top-[384.16px]">Lead by Alex Cho</p>
                  <p className="absolute left-[44.64px] opacity-50 top-[373.06px]">Personal systems</p>
                </div>
                <p className="absolute left-[44.63px] text-[9.027px] top-[357.55px]">Auditorium</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[1081.97px] left-[1106.26px] opacity-50 overflow-clip top-[226.89px] w-[226.836px]">
          <div className="absolute contents left-0 top-0">
            <div className="absolute bg-[rgba(217,217,217,0)] border-[rgba(255,255,255,0.2)] border-l-[0.903px] border-solid h-[1081.97px] left-0 top-0 w-[226.836px]" />
            <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[113.7px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
              Thu
            </p>
            <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[113.45px] not-italic text-[18.055px] text-center text-white top-[21.27px] whitespace-nowrap">
              5
            </p>
          </div>
          <div className="absolute contents left-[23.02px] top-[396.15px]">
            <div className="absolute bg-white h-[529.329px] left-[23.02px] opacity-10 rounded-[24.062px] shadow-[0px_12.638px_32.769px_0px_rgba(0,0,0,0.1)] top-[396.15px] w-[192.33px]" />
            <div className="absolute contents left-[49.81px] top-[425.2px]">
              <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[49.81px] not-italic text-[16.249px] text-white top-[449.64px] w-[138.738px]">
                Johnson and Johnson follow up meeting
              </p>
              <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[49.81px] not-italic text-[7.222px] text-white top-[425.2px] whitespace-nowrap">
                10 am - 1 pm
              </p>
              <div className="absolute contents font-['Gotham:Light',sans-serif] leading-[normal] left-[49.81px] not-italic text-white top-[565.37px] whitespace-nowrap">
                <div className="absolute contents left-[49.82px] text-[7.222px] top-[580.87px]">
                  <p className="absolute left-[49.82px] opacity-50 top-[591.97px]">Calvin, Martin, Lauren, Coco</p>
                  <p className="absolute left-[49.82px] opacity-50 top-[580.87px]">Customer Management team</p>
                </div>
                <p className="absolute left-[49.81px] text-[9.027px] top-[565.37px]">Online zoom meeting</p>
              </div>
              <div className="absolute contents left-[49.81px] top-[524.62px]">
                <div className="absolute bg-white border-[0.451px] border-solid border-white h-[17.816px] left-[49.81px] opacity-20 rounded-[6.016px] shadow-[0px_3.611px_3.611px_0px_rgba(0,0,0,0.1)] top-[524.62px] w-[53.448px]" />
                <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[58.48px] not-italic text-[5.416px] text-white top-[530.37px] whitespace-nowrap">
                  Join meeting
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[1081.97px] left-[425.76px] opacity-50 overflow-clip top-[226.89px] w-[226.836px]">
          <div className="absolute contents left-0 top-0">
            <div className="absolute bg-[rgba(217,217,217,0)] border-[rgba(255,255,255,0.2)] border-l-[0.903px] border-solid h-[1081.97px] left-0 top-0 w-[226.836px]" />
            <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[113.23px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
              Mon
            </p>
            <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[113.3px] not-italic text-[18.055px] text-center text-white top-[21.27px] whitespace-nowrap">
              2
            </p>
          </div>
          <div className="absolute contents left-[17.26px] top-[311.29px]">
            <div className="absolute bg-white h-[274.76px] left-[17.26px] opacity-10 rounded-[24.062px] shadow-[0px_12.638px_32.769px_0px_rgba(0,0,0,0.1)] top-[311.29px] w-[192.33px]" />
            <div className="absolute contents left-[44.23px] top-[340.34px]">
              <div className="absolute font-['Gotham:Medium',sans-serif] leading-[0] left-[44.23px] not-italic text-[16.249px] text-white top-[364.77px] w-[138.738px] whitespace-pre-wrap">
                <p className="leading-[normal] mb-0">{`Marriot `}</p>
                <p className="leading-[normal]">Onboarding meeting</p>
              </div>
              <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[44.23px] not-italic text-[7.222px] text-white top-[340.34px] whitespace-nowrap">
                10 am - 1 pm
              </p>
              <div className="absolute contents font-['Gotham:Light',sans-serif] leading-[normal] left-[44.23px] not-italic text-white top-[480.5px] whitespace-nowrap">
                <div className="absolute contents left-[44.23px] text-[7.222px] top-[496.01px]">
                  <p className="absolute left-[44.23px] opacity-50 top-[507.11px]">James, Cathy, Martha, Ken</p>
                  <p className="absolute left-[44.23px] opacity-50 top-[496.01px]">Customer onboarding team</p>
                </div>
                <p className="absolute left-[44.23px] text-[9.027px] top-[480.5px]">Online, Zoom meeting</p>
              </div>
              <div className="absolute contents left-[44.23px] top-[439.76px]">
                <div className="absolute bg-white border-[0.451px] border-solid border-white h-[17.816px] left-[44.23px] opacity-20 rounded-[6.016px] shadow-[0px_3.611px_3.611px_0px_rgba(0,0,0,0.1)] top-[439.76px] w-[53.448px]" />
                <p className="absolute font-['Gotham:Bold',sans-serif] leading-[normal] left-[52.9px] not-italic text-[5.416px] text-white top-[445.66px] whitespace-nowrap">
                  Join meeting
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[1081.97px] left-[652.6px] overflow-clip top-[226.89px] w-[226.836px]">
          <div className="absolute left-[96.74px] size-[34.15px] top-[14.13px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse55FS} />
          </div>
          <div className="absolute contents left-0 top-0">
            <div className="absolute contents left-0 top-0">
              <div className="absolute bg-[rgba(217,217,217,0)] border-[rgba(255,255,255,0.2)] border-l-[0.903px] border-solid h-[1081.97px] left-0 top-0 w-[226.836px]" />
              <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[113.69px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
                Tue
              </p>
              <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[113.95px] not-italic text-[18.055px] text-black text-center top-[21.27px] whitespace-nowrap">
                3
              </p>
            </div>
            <div className="absolute contents left-[17.24px] top-[650.72px]">
              <div className="absolute bg-white h-[274.76px] left-[17.24px] opacity-10 rounded-[24.062px] shadow-[0px_12.638px_32.769px_0px_rgba(0,0,0,0.1)] top-[650.72px] w-[192.33px]" />
              <div className="absolute contents leading-[normal] left-[43.98px] not-italic text-white top-[679.77px]">
                <p className="absolute font-['Gotham:Medium',sans-serif] left-[43.98px] text-[16.249px] top-[704.21px] w-[138.738px]">
                  University cooperation project
                </p>
                <p className="absolute font-['Gotham:Light',sans-serif] left-[43.98px] text-[7.222px] top-[679.77px] whitespace-nowrap">
                  2 pm ~ 5 pm
                </p>
                <div className="absolute contents font-['Gotham:Light',sans-serif] left-[43.98px] top-[781.84px] whitespace-nowrap">
                  <div className="absolute contents left-[43.98px] text-[7.222px] top-[797.34px]">
                    <p className="absolute left-[43.98px] opacity-50 top-[808.44px]">Kim, Chloe, Rob, Bruce, Kris</p>
                    <p className="absolute left-[43.98px] opacity-50 top-[797.34px]">Product ideation team</p>
                  </div>
                  <p className="absolute left-[43.98px] text-[9.027px] top-[781.84px]">Conference meeting room 1</p>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[17.2px] top-[226.43px]">
              <div className="absolute bg-white h-[274.76px] left-[17.2px] opacity-10 rounded-[24.062px] shadow-[0px_12.638px_32.769px_0px_rgba(0,0,0,0.1)] top-[226.43px] w-[192.33px]" />
              <div className="absolute contents left-[43.98px] top-[255.48px]">
                <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[43.98px] not-italic text-[16.249px] text-white top-[279.92px] w-[138.738px]">
                  Marketing plan ideation meeting
                </p>
                <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[43.98px] not-italic text-[7.222px] text-white top-[255.48px] whitespace-nowrap">
                  9 am - 12 pm
                </p>
                <div className="absolute contents font-['Gotham:Light',sans-serif] leading-[normal] left-[43.98px] not-italic text-white top-[395.65px] whitespace-nowrap">
                  <div className="absolute contents left-[43.98px] text-[7.222px] top-[411.16px]">
                    <p className="absolute left-[43.98px] opacity-50 top-[422.26px]">Sean, John, Amy, Mary</p>
                    <p className="absolute left-[43.98px] opacity-50 top-[411.16px]">Digital Marketing Team</p>
                  </div>
                  <p className="absolute left-[43.98px] text-[9.027px] top-[395.65px]">Online, Zoom meeting</p>
                </div>
                <div className="absolute contents left-[43.98px] top-[354.91px]">
                  <div className="absolute bg-white border-[0.451px] border-solid border-white h-[17.816px] left-[43.98px] opacity-20 rounded-[6.016px] shadow-[0px_3.611px_3.611px_0px_rgba(0,0,0,0.1)] top-[354.91px] w-[53.448px]" />
                  <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[52.64px] not-italic text-[5.416px] text-white top-[360.66px] whitespace-nowrap">
                    Join meeting
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-0 left-[13.45px] top-[209.06px] w-[198.854px]">
            <div className="absolute inset-[-2.41px_-1.21%]">
              <img alt="" className="block max-w-none size-full" src={imgVector55FS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarHalfLong({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-[#001a4e] h-[1001.97px] overflow-clip relative rounded-[61.66px] w-[910.508px]"}
      data-name="calendar half long"
    >
      <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[14.581px] text-white top-[64.96px] whitespace-nowrap">
        Today's Schedule
      </p>
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[48.604px] text-white top-[82.41px] whitespace-nowrap">
        April 1, 2026
      </p>
      <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[374.65px] not-italic opacity-80 text-[36.453px] text-white top-[89.41px] whitespace-nowrap">
        Wednesday
      </p>
      <div className="absolute contents left-[53.54px] top-[199.89px]">
        <div className="absolute h-[1081.97px] left-[1106.27px] opacity-50 overflow-clip top-[199.89px] w-[226.836px]">
          <div className="absolute bg-[rgba(217,217,217,0)] border-[rgba(255,255,255,0.2)] border-l-[0.903px] border-solid h-[1081.97px] left-0 top-0 w-[226.836px]" />
          <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[113.99px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
            Sat
          </p>
          <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[113.84px] not-italic text-[18.055px] text-center text-white top-[21.27px] whitespace-nowrap">
            7
          </p>
        </div>
        <div className="absolute h-[1081.97px] left-[53.54px] overflow-clip top-[199.89px] w-[145.385px]">
          <div className="absolute contents left-0 top-0">
            <div className="absolute bg-[rgba(217,217,217,0)] h-[1081.97px] left-0 top-0 w-[145.385px]" />
            <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[72.84px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
              UTC+9
            </p>
            <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[72.46px] not-italic text-[18.055px] text-center text-white top-[27.59px] whitespace-nowrap">
              Seoul
            </p>
          </div>
          <div className="absolute contents font-['Gotham:Medium',sans-serif] leading-[normal] left-[46.96px] not-italic text-[14.444px] text-white top-[141.58px] whitespace-nowrap">
            {["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"].map((time, i) => (
              <p key={i} className="absolute left-[46.96px]" style={{ top: `${141.58 + i * 84.85}px` }}>
                {time}
              </p>
            ))}
          </div>
        </div>
        <div className="absolute h-[1081.97px] left-[879.43px] opacity-50 overflow-clip top-[199.89px] w-[226.836px]">
          <div className="absolute contents left-0 top-0">
            <div className="absolute bg-[rgba(217,217,217,0)] border-[rgba(255,255,255,0.2)] border-l-[0.903px] border-solid h-[1081.97px] left-0 top-0 w-[226.836px]" />
            <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[112.73px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
              Fri
            </p>
            <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[112.29px] not-italic text-[18.055px] text-center text-white top-[21.27px] whitespace-nowrap">
              6
            </p>
          </div>
          <div className="absolute contents left-[17.26px] top-[311.29px]">
            <div className="absolute bg-white h-[274.76px] left-[17.26px] opacity-10 rounded-[24.062px] shadow-[0px_12.638px_32.769px_0px_rgba(0,0,0,0.1)] top-[311.29px] w-[192.33px]" />
            <div className="absolute contents left-[44.13px] top-[340.34px]">
              <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[44.13px] not-italic text-[16.249px] text-white top-[364.77px] w-[138.738px]">
                Managers sync meeting
              </p>
              <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[44.13px] not-italic text-[7.222px] text-white top-[340.34px] whitespace-nowrap">
                10 am - 1 pm
              </p>
            </div>
          </div>
        </div>
        <div className="absolute h-[1081.97px] left-[425.76px] opacity-50 overflow-clip top-[199.89px] w-[226.836px]">
          <div className="absolute contents left-0 top-0">
            <div className="absolute bg-[rgba(217,217,217,0)] border-[rgba(255,255,255,0.2)] border-l-[0.903px] border-solid h-[1081.97px] left-0 top-0 w-[226.836px]" />
            <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[114.13px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
              Wed
            </p>
            <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[113.29px] not-italic text-[18.055px] text-center text-white top-[21.27px] whitespace-nowrap">
              4
            </p>
          </div>
        </div>
        <div className="absolute h-[1081.97px] left-[652.6px] opacity-50 overflow-clip top-[199.89px] w-[226.836px]">
          <div className="absolute left-[96.74px] size-[34.15px] top-[14.13px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse55HL} />
          </div>
          <div className="absolute contents left-0 top-0">
            <div className="absolute contents left-0 top-0">
              <div className="absolute bg-[rgba(217,217,217,0)] border-[rgba(255,255,255,0.2)] border-l-[0.903px] border-solid h-[1081.97px] left-0 top-0 w-[226.836px]" />
              <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[113.69px] not-italic text-[9.027px] text-center text-white top-[56.48px] whitespace-nowrap">
                Tue
              </p>
              <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[113.95px] not-italic text-[18.055px] text-black text-center top-[21.27px] whitespace-nowrap">
                3
              </p>
            </div>
          </div>
          <div className="absolute h-0 left-[13.45px] top-[209.06px] w-[198.854px]">
            <div className="absolute inset-[-2.41px_-1.21%]">
              <img alt="" className="block max-w-none size-full" src={imgVector55HL} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarQuarterWide({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-[#001a4e] h-[490px] overflow-clip relative rounded-[61.66px] w-[910px]"}
      data-name="calendar quarter wide"
    >
      <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[14.581px] text-white top-[64.99px] whitespace-nowrap">
        Today's Schedule
      </p>
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[48.604px] text-white top-[82.44px] whitespace-nowrap">
        April 1, 2026
      </p>
      <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[374.65px] not-italic opacity-80 text-[36.453px] text-white top-[89.44px] whitespace-nowrap">
        Wednesday
      </p>
      <div className="absolute contents left-[12.76px] top-[174.5px]">
        <div className="absolute h-[899.433px] left-[1064.76px] opacity-50 overflow-clip top-[174.5px] w-[227px]">
          <div className="absolute bg-[rgba(217,217,217,0)] border-[rgba(255,255,255,0.2)] border-l-[0.903px] border-solid h-[1081.97px] left-[0.27px] top-[-182.68px] w-[226.836px]" />
        </div>
        <div className="absolute h-[899.433px] left-[12.76px] overflow-clip top-[174.5px] w-[145px]">
          <div className="absolute contents left-[-0.46px] top-[-182.68px]">
            <div className="absolute bg-[rgba(217,217,217,0)] h-[1081.97px] left-[-0.46px] top-[-182.68px] w-[145.385px]" />
            <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[72.38px] not-italic text-[9.027px] text-center text-white top-[-126.2px] whitespace-nowrap">
              UTC+9
            </p>
            <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[72px] not-italic text-[18.055px] text-center text-white top-[-155.09px] whitespace-nowrap">
              Seoul
            </p>
          </div>
        </div>
        <div className="absolute h-[899.433px] left-[157.76px] overflow-clip top-[174.5px] w-[227px]">
          <div className="absolute left-[96.66px] size-[34.15px] top-[-168.55px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse55QW} />
          </div>
          <div className="absolute h-0 left-[13.37px] top-[26.38px] w-[198.854px]">
            <div className="absolute inset-[-2.41px_-1.21%]">
              <img alt="" className="block max-w-none size-full" src={imgVector55QW} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarQuarterLong({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-[#001a4e] h-[1000px] overflow-clip relative rounded-[61.66px] w-[455px]"}
      data-name="calendar quarter long"
    >
      <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[36.453px] text-white top-[44.99px] whitespace-nowrap">
        Wednesday
      </p>
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[48.604px] text-white top-[82.44px] whitespace-nowrap">
        April 1, 2026
      </p>
      <div className="absolute h-[896px] left-[11px] overflow-clip top-[186.03px] w-[146px]">
        <div className="absolute contents left-[0.39px] top-[-186.11px]">
          <div className="absolute bg-[rgba(217,217,217,0)] h-[1081.97px] left-[0.39px] top-[-186.11px] w-[145.385px]" />
          <p className="-translate-x-1/2 absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[73.23px] not-italic text-[9.027px] text-center text-white top-[-129.63px] whitespace-nowrap">
            UTC+9
          </p>
          <p className="-translate-x-1/2 absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[72.85px] not-italic text-[18.055px] text-center text-white top-[-158.52px] whitespace-nowrap">
            Seoul
          </p>
        </div>
      </div>
      <div className="absolute h-[896px] left-[157px] overflow-clip top-[186.03px] w-[227px]">
        <div className="absolute left-[96.51px] size-[34.15px] top-[-171.98px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse55QL} />
        </div>
        <div className="absolute h-0 left-[13.22px] top-[22.95px] w-[198.854px]">
          <div className="absolute inset-[-2.41px_-1.21%]">
            <img alt="" className="block max-w-none size-full" src={imgVector55QL} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarEighthLong({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-[#001a4e] h-[490px] overflow-clip relative rounded-[61.66px] w-[455px]"}
      data-name="calendar eighth long"
    >
      <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[36.453px] text-white top-[44.99px] whitespace-nowrap">
        Wednesday
      </p>
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[48.604px] text-white top-[82.44px] whitespace-nowrap">
        April 1, 2026
      </p>
      <div className="absolute h-[896px] left-[11px] overflow-clip top-[170.03px] w-[146px]">
        <div className="absolute contents left-[0.39px] top-[-186.11px]">
          <div className="absolute bg-[rgba(217,217,217,0)] h-[1081.97px] left-[0.39px] top-[-186.11px] w-[145.385px]" />
        </div>
      </div>
      <div className="absolute h-[896px] left-[157px] overflow-clip top-[170.03px] w-[227px]">
        <div className="absolute left-[96.51px] size-[34.15px] top-[-171.98px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse55EL} />
        </div>
        <div className="absolute h-0 left-[13.22px] top-[22.95px] w-[198.854px]">
          <div className="absolute inset-[-2.41px_-1.21%]">
            <img alt="" className="block max-w-none size-full" src={imgVector55EL} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarSixteenth({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-[#001a4e] h-[245px] overflow-clip relative rounded-[61.66px] w-[455px]"}
      data-name="calendar sixteenth"
    >
      <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[14px] text-white top-[36.99px] whitespace-nowrap">
        Wednesday
      </p>
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[48.604px] text-white top-[53.99px] whitespace-nowrap">
        April 1, 2026
      </p>
      <div className="absolute contents left-[49.03px] top-[122.5px]">
        <div className="absolute bg-white h-[91.488px] left-[49.03px] opacity-10 rounded-[24.062px] shadow-[0px_12.638px_32.769px_0px_rgba(0,0,0,0.1)] top-[122.5px] w-[363.392px]" />
        <div className="absolute contents font-['Gotham:Light',sans-serif] leading-[normal] left-[260.03px] not-italic text-white top-[164.67px] whitespace-nowrap">
          <p className="absolute left-[260.03px] text-[9.027px] top-[164.67px]">Online, Zoom meeting</p>
        </div>
        <div className="absolute contents left-[260.03px] top-[135.93px]">
          <div className="absolute bg-white border-[0.451px] border-solid border-white h-[17.816px] left-[260.03px] opacity-20 rounded-[6.016px] shadow-[0px_3.611px_3.611px_0px_rgba(0,0,0,0.1)] top-[135.93px] w-[53.448px]" />
          <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[268.69px] not-italic text-[5.416px] text-white top-[141.68px] whitespace-nowrap">
            Join meeting
          </p>
        </div>
        <div className="absolute contents leading-[normal] left-[66.03px] not-italic text-white top-[140.84px]">
          <p className="absolute font-['Gotham:Medium',sans-serif] left-[66.03px] text-[16.249px] top-[165.27px] w-[161.472px]">
            Marketing plan ideation meeting
          </p>
          <p className="absolute font-['Gotham:Light',sans-serif] left-[66.03px] text-[7.222px] top-[140.84px] whitespace-nowrap">
            9 am - 12 pm
          </p>
        </div>
      </div>
    </div>
  );
}

function CalendarThreeSixteenth({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-[#001a4e] h-[734px] overflow-clip relative rounded-[61.66px] w-[455px]"}
      data-name="calendar three sixteenth"
    >
      <p className="absolute font-['Gotham:Light',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[36.453px] text-white top-[44.99px] whitespace-nowrap">
        Wednesday
      </p>
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[normal] left-[49.03px] not-italic opacity-80 text-[48.604px] text-white top-[82.44px] whitespace-nowrap">
        April 1, 2026
      </p>
      <div className="absolute h-[896px] left-[11px] overflow-clip top-[186.03px] w-[146px]">
        <div className="absolute left-[96.51px] size-[34.15px] top-[-171.98px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse55TXL} />
        </div>
      </div>
      <div className="absolute h-[896px] left-[157px] overflow-clip top-[186.03px] w-[227px]">
        <div className="absolute h-0 left-[13.22px] top-[22.95px] w-[198.854px]">
          <div className="absolute inset-[-2.41px_-1.21%]">
            <img alt="" className="block max-w-none size-full" src={imgVector55TXL} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Dark-blue theme stub for pending Figma sizes.
function Stub({
  className,
  sizeName,
  width,
  height,
}: { className?: string; sizeName: string; width: number; height: number }) {
  return (
    <StubCell
      className={className}
      defaultClass={`bg-[#001a4e] overflow-clip relative rounded-[60px]`}
      componentName="Calendar"
      sizeName={sizeName}
      width={width}
      height={height}
      textColorClass="text-white"
      mutedColorClass="text-white/60"
      borderClass="border-white/15"
    />
  );
}

export default function Calendar({ size = "quarter wide", className }: Props) {
  switch (size) {
    case "full screen":
      return <CalendarFullScreen className={className} />;
    case "half long":
      return <CalendarHalfLong className={className} />;
    case "quarter wide":
      return <CalendarQuarterWide className={className} />;
    case "quarter long":
      return <CalendarQuarterLong className={className} />;
    case "eighth long":
      return <CalendarEighthLong className={className} />;
    case "sixteenth":
      return <CalendarSixteenth className={className} />;
    case "three sixteenth":
      return <CalendarThreeSixteenth className={className} />;
    // Stubs (pending Figma variants):
    case "half wide":
      return <Stub className={className} sizeName="half wide" width={1840} height={490} />;
    case "eighth wide":
      return <Stub className={className} sizeName="eighth wide" width={1840} height={245} />;
    case "three quarter wide":
      return <Stub className={className} sizeName="three quarter wide" width={1840} height={735} />;
    case "three quarter long":
      return <Stub className={className} sizeName="three quarter long" width={1365} height={1000} />;
    case "three quarter half":
      return <Stub className={className} sizeName="three quarter half" width={1365} height={490} />;
    case "three quarter short":
      return <Stub className={className} sizeName="three quarter short" width={1365} height={244} />;
    case "three quarter tall":
      return <Stub className={className} sizeName="three quarter tall" width={1365} height={734} />;
    case "half short":
      return <Stub className={className} sizeName="half short" width={910} height={245} />;
    case "half tall":
      return <Stub className={className} sizeName="half tall" width={910} height={735} />;
  }
}
