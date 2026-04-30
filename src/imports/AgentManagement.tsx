import StubCell from "./StubCell";

// Full Screen (1840x1000)
const imgFSImage1084 = "https://www.figma.com/api/mcp/asset/1fae6706-b0ec-43df-86d7-c44b03d2ac72";
const imgFSImage1074 = "https://www.figma.com/api/mcp/asset/2ecd060b-8269-46ba-8128-2f462de61f4d";
const imgFSImage1075 = "https://www.figma.com/api/mcp/asset/a16bfec9-3995-4648-b4e7-ecf9efec3d4e";
const imgFSImage1076 = "https://www.figma.com/api/mcp/asset/03e0bcda-653b-422d-9eb1-04009a9e93a1";
const imgFSImage1085 = "https://www.figma.com/api/mcp/asset/b268b2b0-e956-4dab-9241-13a8f56d2efe";
const imgFSImage1077 = "https://www.figma.com/api/mcp/asset/c6c54d9e-71d2-4c9f-a660-1eff14df3f65";
const imgFSImage1078 = "https://www.figma.com/api/mcp/asset/a274e4d2-6b19-4499-8733-2948754b45a0";
const imgFSImage1079 = "https://www.figma.com/api/mcp/asset/1ae1b75a-ad41-4b1d-b634-bd385d598aff";
const imgFSImage1080 = "https://www.figma.com/api/mcp/asset/9ded70d7-f1c6-4339-85bc-fdcfda64948d";
const imgFSImage1086 = "https://www.figma.com/api/mcp/asset/627616d1-35db-4c13-8e85-61bf724bee41";
const imgFSImage1081 = "https://www.figma.com/api/mcp/asset/4faab6a8-fee9-4a74-9e98-841685d424c7";
const imgFSImage1082 = "https://www.figma.com/api/mcp/asset/9ba6a91a-c9ce-4a1f-9f32-45d6c66926fd";
const imgFSImage1083 = "https://www.figma.com/api/mcp/asset/9daee216-febb-4593-bdec-cfd48127f14c";

// Half Long (910x1000)
const imgHLImage1084 = "https://www.figma.com/api/mcp/asset/211b3a46-e7a1-493f-8d89-cc9b5cf80c5d";
const imgHLImage1074 = "https://www.figma.com/api/mcp/asset/863d396a-400b-449f-8298-3497533bb3d9";
const imgHLImage1075 = "https://www.figma.com/api/mcp/asset/7e2302e2-6bc3-4430-a286-885913757222";
const imgHLImage1076 = "https://www.figma.com/api/mcp/asset/270e62d5-a7d4-4189-bc06-a2a4331f8f2e";
const imgHLImage1085 = "https://www.figma.com/api/mcp/asset/ab89fb3c-ca46-4995-a2fe-d41a6eab73c6";
const imgHLImage1077 = "https://www.figma.com/api/mcp/asset/dbc9f294-90ca-458c-a277-b38a1082ab85";
const imgHLImage1078 = "https://www.figma.com/api/mcp/asset/1aa12f02-800c-4305-ab20-27320f93040d";
const imgHLImage1079 = "https://www.figma.com/api/mcp/asset/535d0ae8-d99d-4186-b17d-efc58da613b0";
const imgHLImage1080 = "https://www.figma.com/api/mcp/asset/f282f964-7361-4c67-9733-27bbeac7bef4";
const imgHLImage1086 = "https://www.figma.com/api/mcp/asset/1909f6f6-e3d8-48af-b040-317552709b70";
const imgHLImage1081 = "https://www.figma.com/api/mcp/asset/724e0394-f234-4207-821c-763d3b3beb68";
const imgHLImage1082 = "https://www.figma.com/api/mcp/asset/ba9abf8a-fac9-4743-878f-7c702fc83925";
const imgHLImage1083 = "https://www.figma.com/api/mcp/asset/ab6841c6-8300-420b-ad3d-7c99140b59bf";

// Quarter Wide (910x490)
const imgQWImage1084 = "https://www.figma.com/api/mcp/asset/95c3ad4e-1294-4913-bd65-d6a8b2b8be79";
const imgQWImage1074 = "https://www.figma.com/api/mcp/asset/5811802d-ba3a-404b-ab55-e1b4788d6367";
const imgQWImage1075 = "https://www.figma.com/api/mcp/asset/aa75bc3a-74ac-4256-9efe-3a739e674e30";
const imgQWImage1076 = "https://www.figma.com/api/mcp/asset/9df1679c-4dd7-41a4-ab5d-ceb4309b68c5";
const imgQWImage1085 = "https://www.figma.com/api/mcp/asset/a117f33a-1de1-46d3-ade3-292b56b9d056";
const imgQWImage1077 = "https://www.figma.com/api/mcp/asset/3171845d-b70c-4dc6-bf22-dbefed397adc";
const imgQWImage1078 = "https://www.figma.com/api/mcp/asset/23ec4372-933d-46c3-b4b9-24614af9ef81";
const imgQWImage1079 = "https://www.figma.com/api/mcp/asset/95df5e49-b574-46da-a5d7-4d7707871a97";
const imgQWImage1080 = "https://www.figma.com/api/mcp/asset/bf72bedb-076e-4ce3-811a-c4139c57285e";
const imgQWImage1086 = "https://www.figma.com/api/mcp/asset/9da887d1-9bb4-4d94-b6a1-86d8f16d8710";
const imgQWImage1081 = "https://www.figma.com/api/mcp/asset/a3ba37f1-673d-44f0-a627-bd5dad667abc";
const imgQWImage1082 = "https://www.figma.com/api/mcp/asset/67a524a4-3847-4e22-ab48-78b388a60384";
const imgQWImage1083 = "https://www.figma.com/api/mcp/asset/6a002175-932f-4b2d-a429-6a0158498772";

// Quarter Long (455x1000)
const imgQLImage1084 = "https://www.figma.com/api/mcp/asset/dcfb0415-cb33-4ecd-8de6-2655b2329557";
const imgQLImage1074 = "https://www.figma.com/api/mcp/asset/fb0c3d31-9694-4430-b920-3575f3583ef9";
const imgQLImage1075 = "https://www.figma.com/api/mcp/asset/7931aa49-89ce-4ae9-ad08-3741fd0ee268";
const imgQLImage1076 = "https://www.figma.com/api/mcp/asset/c9d43adf-44f8-4ea0-bdc9-931d2c80465b";
const imgQLImage1085 = "https://www.figma.com/api/mcp/asset/f161afb0-9858-4e6f-a5d5-8b589bc95bb6";
const imgQLImage1077 = "https://www.figma.com/api/mcp/asset/58331f3b-27ce-457f-949f-9f1d9b00af4e";
const imgQLImage1078 = "https://www.figma.com/api/mcp/asset/3b0e0d2e-ccc3-4e3c-8e7d-3494ef17e9e5";
const imgQLImage1079 = "https://www.figma.com/api/mcp/asset/26baee41-9cde-4044-8512-9e23c00d1aa6";
const imgQLImage1080 = "https://www.figma.com/api/mcp/asset/af38c103-3aeb-4ab9-bd52-f3b2e761d150";
const imgQLImage1086 = "https://www.figma.com/api/mcp/asset/7091068c-745b-4727-b61a-29e8a1e7d920";
const imgQLImage1081 = "https://www.figma.com/api/mcp/asset/16e25128-3fe8-436a-b82e-63377bd25579";
const imgQLImage1082 = "https://www.figma.com/api/mcp/asset/dd005cab-9a2e-4c8d-8a38-efbecfbb65a1";
const imgQLImage1083 = "https://www.figma.com/api/mcp/asset/a0c8d6b4-64b9-4893-9339-3ec52deef0aa";

// Eighth Long (455x490)
const imgELImage1084 = "https://www.figma.com/api/mcp/asset/cc933ba3-ab6f-4c87-9592-0a59a266f35a";
const imgELImage1074 = "https://www.figma.com/api/mcp/asset/3aade2a6-68f8-4464-aed8-b49dfeade934";
const imgELImage1075 = "https://www.figma.com/api/mcp/asset/0c45bda6-a5dc-4e95-988a-fa6f7ebb46fa";
const imgELImage1076 = "https://www.figma.com/api/mcp/asset/5ebfb18e-1301-4452-8ff1-dabea5a3ffe9";
const imgELImage1085 = "https://www.figma.com/api/mcp/asset/51ca0353-da19-4102-af5c-34671eb7face";
const imgELImage1077 = "https://www.figma.com/api/mcp/asset/9fe0bf3c-a50f-474c-b096-a4ff160f8742";
const imgELImage1078 = "https://www.figma.com/api/mcp/asset/8042c1db-6998-4592-ab62-39e446500404";
const imgELImage1079 = "https://www.figma.com/api/mcp/asset/4d4221a3-de62-407b-8073-0f9f7c79df4a";
const imgELImage1080 = "https://www.figma.com/api/mcp/asset/134cf2ab-6e8a-4bdc-a569-e77a78ecc657";
const imgELImage1086 = "https://www.figma.com/api/mcp/asset/8f9415f8-b129-471e-a495-5ffcbda203ee";
const imgELImage1081 = "https://www.figma.com/api/mcp/asset/9d169bf7-02b6-4f24-befd-2d04503419b3";
const imgELImage1082 = "https://www.figma.com/api/mcp/asset/16c30a7f-facb-4dd6-be51-9467a6a37858";
const imgELImage1083 = "https://www.figma.com/api/mcp/asset/0b3c10cd-0932-4396-a1d6-5d5c0b71ad4d";

// Sixteenth (455x245)
// No image assets - title only

// Three Sixteenth (455x734)
const img3XImage1084 = "https://www.figma.com/api/mcp/asset/0e3b66b7-a35a-401f-825e-c77da474e140";
const img3XImage1074 = "https://www.figma.com/api/mcp/asset/4529a62c-092a-41b8-818d-bca999056a34";
const img3XImage1075 = "https://www.figma.com/api/mcp/asset/d41392c5-3344-4139-8d14-46b21307fc7f";
const img3XImage1076 = "https://www.figma.com/api/mcp/asset/08bf162a-348d-4125-9826-64bcca039bf0";
const img3XImage1085 = "https://www.figma.com/api/mcp/asset/9b468588-90dd-455f-9844-edd5fcf6957b";
const img3XImage1077 = "https://www.figma.com/api/mcp/asset/c50e39f8-37a2-4ce3-998d-aa88355a66a8";
const img3XImage1078 = "https://www.figma.com/api/mcp/asset/d72b3bbe-1aca-480c-9af2-189eb0b0a249";
const img3XImage1079 = "https://www.figma.com/api/mcp/asset/04c10156-424f-4f65-afb8-94b38d14d625";
const img3XImage1080 = "https://www.figma.com/api/mcp/asset/23b4c7a2-c802-464c-a716-5a47ba2599c5";
const img3XImage1086 = "https://www.figma.com/api/mcp/asset/1de8f9da-4b67-438d-91f5-c0719a7c78a7";
const img3XImage1081 = "https://www.figma.com/api/mcp/asset/96acc261-d249-4420-b912-99e9cecadd82";
const img3XImage1082 = "https://www.figma.com/api/mcp/asset/36bfea66-1b7a-4c7e-abb3-551b95d5576f";
const img3XImage1083 = "https://www.figma.com/api/mcp/asset/ebd7685e-4a02-4de8-9c2b-a975e8c8822a";

export type AgentManagementSize =
  // Designed variants (from Figma 34:15932):
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
  size?: AgentManagementSize;
  className?: string;
}

function AgentManagementFullScreen({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-black h-[1000px] overflow-clip relative rounded-[60px] w-[1840px]"}
      data-name="My Agent Management full screen"
    >
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[0.91] left-[71.56px] not-italic opacity-60 text-[72px] text-white top-[62.84px] tracking-[-2.16px] whitespace-nowrap">
        My Agent Management
      </p>
      <div className="absolute bg-[rgba(217,217,217,0.2)] h-[73.523px] left-[53.2px] rounded-[30px] top-[190.15px] w-[1733.596px]" />
      <div className="absolute content-stretch flex gap-[42px] items-center left-[57.48px] top-[335.13px]">
        <div className="border-[1.573px] border-[rgba(255,255,255,0.2)] border-solid h-[602.028px] overflow-clip pb-[37px] pl-[42px] pr-[45px] pt-[34px] rounded-[50.329px] w-[547.011px]">
          <p className="font-['Gotham:Book',sans-serif] text-[27.714px] text-white">Customer Management and Support</p>
          <img alt="" src={imgFSImage1084} />
          <img alt="" src={imgFSImage1074} />
          <img alt="" src={imgFSImage1075} />
          <img alt="" src={imgFSImage1076} />
        </div>
        <div className="border border-[rgba(255,255,255,0.2)] border-solid h-[602.028px] overflow-clip pb-[39px] pl-[42px] pr-[45px] pt-[34px] rounded-[50.329px] w-[547.011px]">
          <p className="font-['Gotham:Book',sans-serif] text-[27.714px] text-white">Online Marketing</p>
          <img alt="" src={imgFSImage1085} />
          <img alt="" src={imgFSImage1077} />
          <img alt="" src={imgFSImage1078} />
          <img alt="" src={imgFSImage1079} />
          <img alt="" src={imgFSImage1080} />
        </div>
        <div className="border-[1.573px] border-[rgba(255,255,255,0.2)] border-solid h-[602.028px] overflow-clip pb-[37px] pl-[42px] pr-[45px] pt-[34px] rounded-[50.329px] w-[547.011px]">
          <p className="font-['Gotham:Book',sans-serif] text-[27.714px] text-white">Inventory Management and Shipment</p>
          <img alt="" src={imgFSImage1086} />
          <img alt="" src={imgFSImage1081} />
          <img alt="" src={imgFSImage1082} />
          <img alt="" src={imgFSImage1083} />
        </div>
      </div>
    </div>
  );
}

function AgentManagementHalfLong({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-black h-[1001.97px] overflow-clip relative rounded-[61.66px] w-[910.508px]"}
      data-name="My Agent Management half long"
    >
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[0.91] left-[calc(50%-400.5px)] not-italic opacity-60 text-[72px] text-white top-[98.02px] tracking-[-2.16px]">
        My Agent Management
      </p>
      <div className="absolute content-stretch flex gap-[42px] items-center left-[44.88px] top-[348px]">
        <div className="border-[1.573px] border-[rgba(255,255,255,0.2)] border-solid h-[602.028px] overflow-clip pb-[37px] pl-[42px] pr-[45px] pt-[34px] rounded-[50.329px] w-[547.011px]">
          <img alt="" src={imgHLImage1084} />
          <img alt="" src={imgHLImage1074} />
          <img alt="" src={imgHLImage1075} />
          <img alt="" src={imgHLImage1076} />
        </div>
        <div className="border border-[rgba(255,255,255,0.2)] border-solid h-[602.028px] overflow-clip pb-[39px] pl-[42px] pr-[45px] pt-[34px] rounded-[50.329px] w-[547.011px]">
          <img alt="" src={imgHLImage1085} />
          <img alt="" src={imgHLImage1077} />
          <img alt="" src={imgHLImage1078} />
          <img alt="" src={imgHLImage1079} />
          <img alt="" src={imgHLImage1080} />
        </div>
        <div className="border-[1.573px] border-[rgba(255,255,255,0.2)] border-solid h-[602.028px] overflow-clip pb-[37px] pl-[42px] pr-[45px] pt-[34px] rounded-[50.329px] w-[547.011px]">
          <img alt="" src={imgHLImage1086} />
          <img alt="" src={imgHLImage1081} />
          <img alt="" src={imgHLImage1082} />
          <img alt="" src={imgHLImage1083} />
        </div>
      </div>
    </div>
  );
}

function AgentManagementQuarterWide({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-black h-[490px] overflow-clip relative rounded-[60px] w-[910px]"}
      data-name="My Agent Management quarter wide"
    >
      <p className="absolute font-['Gotham:Medium',sans-serif] left-[calc(50%-400.5px)] not-italic opacity-60 text-[72px] text-white top-[79.67px]">
        My Agent Management
      </p>
      <div className="absolute content-stretch flex gap-[29.861px] items-center left-[54.5px] top-[294.03px]">
        <div className="border-[1.118px] border-[rgba(255,255,255,0.2)] border-solid h-[142px] overflow-clip pb-[26.306px] pl-[29.861px] pr-[31.994px] pt-[24.173px] rounded-[35.782px] w-[389px]">
          <img alt="" src={imgQWImage1084} />
          <img alt="" src={imgQWImage1074} />
          <img alt="" src={imgQWImage1075} />
          <img alt="" src={imgQWImage1076} />
        </div>
        <div className="border-[0.711px] border-[rgba(255,255,255,0.2)] border-solid h-[141.585px] opacity-50 overflow-clip pb-[27.728px] pl-[29.861px] pr-[31.994px] pt-[24.173px] rounded-[35.782px] w-[388.911px]">
          <img alt="" src={imgQWImage1085} />
          <img alt="" src={imgQWImage1077} />
          <img alt="" src={imgQWImage1078} />
          <img alt="" src={imgQWImage1079} />
          <img alt="" src={imgQWImage1080} />
        </div>
        <div className="border-[1.118px] border-[rgba(255,255,255,0.2)] border-solid h-[142px] opacity-50 overflow-clip pb-[26.306px] pl-[29.861px] pr-[31.994px] pt-[24.173px] rounded-[35.782px] w-[388px]">
          <img alt="" src={imgQWImage1086} />
          <img alt="" src={imgQWImage1081} />
          <img alt="" src={imgQWImage1082} />
          <img alt="" src={imgQWImage1083} />
        </div>
      </div>
    </div>
  );
}

function AgentManagementQuarterLong({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-black h-[1000px] overflow-clip relative rounded-[60px] w-[455px]"}
      data-name="My Agent Management quarter long"
    >
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[0] left-[calc(50%-173px)] not-italic opacity-60 text-[47.701px] text-white top-[94.04px] tracking-[-1.431px]">
        My Agent Management
      </p>
      <div className="absolute content-stretch flex flex-col gap-[29.861px] items-start left-[35.5px] top-[359.03px]">
        <div className="border-[1.118px] border-[rgba(255,255,255,0.2)] border-solid h-[428.027px] overflow-clip pb-[26.306px] pl-[29.861px] pr-[31.994px] pt-[24.173px] rounded-[35.782px] w-[388.911px]">
          <img alt="" src={imgQLImage1084} />
          <img alt="" src={imgQLImage1074} />
          <img alt="" src={imgQLImage1075} />
          <img alt="" src={imgQLImage1076} />
        </div>
        <div className="border-[0.711px] border-[rgba(255,255,255,0.2)] border-solid h-[428.027px] opacity-50 overflow-clip pb-[27.728px] pl-[29.861px] pr-[31.994px] pt-[24.173px] rounded-[35.782px] w-[388.911px]">
          <img alt="" src={imgQLImage1085} />
          <img alt="" src={imgQLImage1077} />
          <img alt="" src={imgQLImage1078} />
          <img alt="" src={imgQLImage1079} />
          <img alt="" src={imgQLImage1080} />
        </div>
        <div className="border-[1.118px] border-[rgba(255,255,255,0.2)] border-solid h-[428.027px] opacity-50 overflow-clip pb-[26.306px] pl-[29.861px] pr-[31.994px] pt-[24.173px] rounded-[35.782px] w-[388.911px]">
          <img alt="" src={imgQLImage1086} />
          <img alt="" src={imgQLImage1081} />
          <img alt="" src={imgQLImage1082} />
          <img alt="" src={imgQLImage1083} />
        </div>
      </div>
    </div>
  );
}

function AgentManagementEighthLong({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-black h-[490px] overflow-clip relative rounded-[60px] w-[455px]"}
      data-name="My Agent Management eighth long"
    >
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[0] left-[calc(50%-172.5px)] not-italic opacity-60 text-[47.701px] text-white top-[84.97px] tracking-[-1.431px]">
        My Agent Management
      </p>
      <div className="absolute content-stretch flex flex-col gap-[29.861px] items-start left-[36px] top-[319.03px]">
        <div className="border-[1.118px] border-[rgba(255,255,255,0.2)] border-solid h-[428.027px] overflow-clip pb-[26.306px] pl-[29.861px] pr-[31.994px] pt-[24.173px] rounded-[35.782px] w-[388.911px]">
          <img alt="" src={imgELImage1084} />
          <img alt="" src={imgELImage1074} />
          <img alt="" src={imgELImage1075} />
          <img alt="" src={imgELImage1076} />
        </div>
        <div className="border-[0.711px] border-[rgba(255,255,255,0.2)] border-solid h-[428.027px] opacity-50 overflow-clip pb-[27.728px] pl-[29.861px] pr-[31.994px] pt-[24.173px] rounded-[35.782px] w-[388.911px]">
          <img alt="" src={imgELImage1085} />
          <img alt="" src={imgELImage1077} />
          <img alt="" src={imgELImage1078} />
          <img alt="" src={imgELImage1079} />
          <img alt="" src={imgELImage1080} />
        </div>
        <div className="border-[1.118px] border-[rgba(255,255,255,0.2)] border-solid h-[428.027px] opacity-50 overflow-clip pb-[26.306px] pl-[29.861px] pr-[31.994px] pt-[24.173px] rounded-[35.782px] w-[388.911px]">
          <img alt="" src={imgELImage1086} />
          <img alt="" src={imgELImage1081} />
          <img alt="" src={imgELImage1082} />
          <img alt="" src={imgELImage1083} />
        </div>
      </div>
    </div>
  );
}

function AgentManagementSixteenth({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-black h-[245px] overflow-clip relative rounded-[60px] w-[455px]"}
      data-name="My Agent Management sixteenth"
    >
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[0] left-[calc(50%-172.5px)] not-italic opacity-60 text-[47.701px] text-white top-[84.97px] tracking-[-1.431px]">
        My Agent Management
      </p>
    </div>
  );
}

function AgentManagementThreeSixteenth({ className }: { className?: string }) {
  return (
    <div
      className={className || "bg-black h-[734px] overflow-clip relative rounded-[60px] w-[455px]"}
      data-name="My Agent Management three sixteenth"
    >
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[0] left-[calc(50%-172.5px)] not-italic opacity-60 text-[47.701px] text-white top-[58.03px] tracking-[-1.431px]">
        My Agent Management
      </p>
      <div className="absolute content-stretch flex flex-col gap-[29.861px] items-start left-[36px] top-[269.03px]">
        <div className="border-[1.118px] border-[rgba(255,255,255,0.2)] border-solid h-[428.027px] overflow-clip pb-[26.306px] pl-[29.861px] pr-[31.994px] pt-[24.173px] rounded-[35.782px] w-[388.911px]">
          <img alt="" src={img3XImage1084} />
          <img alt="" src={img3XImage1074} />
          <img alt="" src={img3XImage1075} />
          <img alt="" src={img3XImage1076} />
        </div>
        <div className="border-[0.711px] border-[rgba(255,255,255,0.2)] border-solid h-[428.027px] opacity-50 overflow-clip pb-[27.728px] pl-[29.861px] pr-[31.994px] pt-[24.173px] rounded-[35.782px] w-[388.911px]">
          <img alt="" src={img3XImage1085} />
          <img alt="" src={img3XImage1077} />
          <img alt="" src={img3XImage1078} />
          <img alt="" src={img3XImage1079} />
          <img alt="" src={img3XImage1080} />
        </div>
        <div className="border-[1.118px] border-[rgba(255,255,255,0.2)] border-solid h-[428.027px] opacity-50 overflow-clip pb-[26.306px] pl-[29.861px] pr-[31.994px] pt-[24.173px] rounded-[35.782px] w-[388.911px]">
          <img alt="" src={img3XImage1086} />
          <img alt="" src={img3XImage1081} />
          <img alt="" src={img3XImage1082} />
          <img alt="" src={img3XImage1083} />
        </div>
      </div>
    </div>
  );
}

// Dark theme stub for pending Figma sizes.
function Stub({
  className,
  sizeName,
  width,
  height,
}: { className?: string; sizeName: string; width: number; height: number }) {
  return (
    <StubCell
      className={className}
      defaultClass={`bg-black overflow-clip relative rounded-[60px]`}
      componentName="My Agent Management"
      sizeName={sizeName}
      width={width}
      height={height}
      textColorClass="text-white"
      mutedColorClass="text-white/60"
      borderClass="border-white/15"
    />
  );
}

export default function AgentManagement({ size = "half long", className }: Props) {
  switch (size) {
    case "full screen":
      return <AgentManagementFullScreen className={className} />;
    case "half long":
      return <AgentManagementHalfLong className={className} />;
    case "quarter wide":
      return <AgentManagementQuarterWide className={className} />;
    case "quarter long":
      return <AgentManagementQuarterLong className={className} />;
    case "eighth long":
      return <AgentManagementEighthLong className={className} />;
    case "sixteenth":
      return <AgentManagementSixteenth className={className} />;
    case "three sixteenth":
      return <AgentManagementThreeSixteenth className={className} />;
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
