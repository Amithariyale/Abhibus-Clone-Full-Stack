export const Bus = ({ width = "1em", height = "1em" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: "inherit" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.55167 0.065144C2.8118 0.244245 2.16752 0.874815 1.90869 1.67323C1.84052 1.88349 1.82935 2.16084 1.80786 4.18167L1.7837 6.45372L1.51408 6.55128C0.822351 6.80169 0.251996 7.42878 0.0658035 8.14363C0.0190405 8.32325 0 8.61062 0 9.13782C0 10.0471 0.0526944 10.2343 0.409263 10.5908C0.707162 10.8887 0.993285 11 1.46092 11H1.80115L1.81392 14.6427L1.82668 18.2853L1.92691 18.563C2.07361 18.9695 2.22 19.1967 2.53788 19.5113C2.81838 19.7889 3.23752 20.0395 3.51333 20.0947L3.64227 20.1205L3.66239 20.5378C3.69398 21.1944 3.92848 21.5941 4.44047 21.8641L4.66341 21.9816L5.89116 21.9947C7.06084 22.0072 7.13064 22.0035 7.36669 21.9151C7.53732 21.8513 7.68565 21.7513 7.84304 21.5939C8.14141 21.2955 8.2523 21.01 8.2523 20.5401V20.1979H11.0031H13.7538V20.5401C13.7538 21.01 13.8647 21.2955 14.1631 21.5939C14.3205 21.7513 14.4688 21.8513 14.6395 21.9151C14.8755 22.0035 14.9453 22.0072 16.115 21.9947L17.3427 21.9816L17.5657 21.8641C18.0777 21.5941 18.3122 21.1944 18.3438 20.5378L18.3639 20.1205L18.4928 20.0947C18.7686 20.0395 19.1878 19.7889 19.4683 19.5113C19.7861 19.1967 19.9325 18.9695 20.0792 18.563L20.1795 18.2853L20.1922 14.6427L20.205 11H20.5452C21.0124 11 21.2991 10.8886 21.5961 10.5916C21.7386 10.4491 21.8526 10.2858 21.9006 10.1554C21.9428 10.0408 21.9935 9.92867 22.0132 9.90619C22.0614 9.85143 22.0597 8.28066 22.0115 8.31044C21.9908 8.32321 21.9621 8.25981 21.9476 8.16955C21.9033 7.89203 21.6271 7.39972 21.3672 7.135C21.0665 6.8286 20.839 6.67687 20.4921 6.55128L20.2224 6.45372L20.1983 4.18167C20.1717 1.68285 20.1767 1.73125 19.8895 1.18879C19.7209 0.870216 19.2843 0.434091 18.9622 0.262383C18.4387 -0.0166054 18.8833 -0.0020349 10.9816 0.00118865C4.93587 0.00368154 3.76404 0.013782 3.55167 0.065144ZM5.51581 1.92436C4.5897 2.24586 4.3001 3.40862 4.96823 4.12291C5.06988 4.23157 5.24593 4.36795 5.35953 4.42597L5.56601 4.53145H11.0031H16.4401L16.6466 4.42597C16.7602 4.36795 16.9363 4.23157 17.0379 4.12291C17.6572 3.46084 17.4575 2.38735 16.6405 1.98613L16.3972 1.86664L11.0675 1.85697C6.03888 1.84781 5.72538 1.85164 5.51581 1.92436ZM4.78565 5.54283C4.38859 5.62234 4.04427 5.87631 3.84446 6.23697L3.71784 6.46558L3.70584 9.09317C3.69411 11.6559 3.696 11.7266 3.78231 11.9573C3.90029 12.2726 4.2275 12.6007 4.54096 12.718C4.77129 12.8042 4.84926 12.8052 11.0031 12.8052C17.1569 12.8052 17.2349 12.8042 17.4652 12.718C17.7786 12.6007 18.1059 12.2726 18.2238 11.9573C18.3101 11.7266 18.312 11.6559 18.3003 9.09317L18.2883 6.46558L18.1617 6.23697C18.0075 5.95862 17.8104 5.77965 17.4951 5.6318L17.2568 5.52L11.1105 5.51356C7.73009 5.50999 4.8839 5.52318 4.78565 5.54283ZM0.017923 9.13039C0.017966 9.57954 0.0243271 9.75743 0.0320636 9.52572C0.0398002 9.29401 0.0397572 8.92653 0.0319777 8.70909C0.0241982 8.49165 0.01788 8.68124 0.017923 9.13039ZM5.52303 14.7535C5.12154 14.9109 4.83082 15.1985 4.68645 15.581C4.36831 16.4238 4.96471 17.3297 5.87929 17.3928C6.41036 17.4295 6.9337 17.1277 7.17877 16.6436C7.32792 16.349 7.347 15.8797 7.22326 15.5501C7.10253 15.2287 6.77794 14.9018 6.46211 14.7836C6.19959 14.6854 5.73475 14.6705 5.52303 14.7535ZM15.5318 14.7836C15.2277 14.9035 14.8996 15.2392 14.7829 15.5501C14.6591 15.8797 14.6782 16.349 14.8274 16.6436C15.0724 17.1277 15.5958 17.4295 16.1269 17.3928C17.2754 17.3136 17.8189 15.9614 17.0379 15.1264C16.7634 14.833 16.5131 14.7218 16.0963 14.708C15.8324 14.6993 15.7011 14.7169 15.5318 14.7836Z"
      fill="currentColor"
    ></path>
  </svg>
);
export const Location = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 10 12"
    fill="currentColor"
    style={{ color: "inherit" }}
  >
    <path
      data-name="Path 1660"
      d="M69,301a4.789,4.789,0,0,0-5,4.532c0,3.552,4.53,7.218,4.723,7.373a.453.453,0,0,0,.554,0c.193-.154,4.723-3.821,4.723-7.373A4.789,4.789,0,0,0,69,301Zm0,7a2.514,2.514,0,1,1,2.778-2.5A2.652,2.652,0,0,1,69,308Z"
      transform="translate(-64 -301)"
    ></path>
  </svg>
);

export const VerticalLine = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 1 21"
    style={{ color: "inherit" }}
  >
    <line
      data-name="Line 47"
      y2="20"
      transform="translate(0.5 0.5)"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1"
    ></line>
  </svg>
);

export const Checked = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.3rem"
    height="1.3rem"
    fill="currentColor"
    class="data-fill-check"
    viewBox="0 0 16 16"
  >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
  </svg>
);

export const CheckedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.3rem"
    height="1.3rem"
    fill="#61B00F"
    className="data-fill-check"
    viewBox="0 0 16 16"
  >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
  </svg>
);

export const ContinueIcon = () => (
  <svg
    className="continue-arrow"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 626 626"
    width="626"
    height="626"
    preserveAspectRatio="xMidYMid meet"
    style={{
      width: "35px",
      height: "31px",
      transform: " translate3d(0px, 0px, 0px)",
      contentVisibility: "visible",
    }}
  >
    <defs>
      <clipPath id="__lottie_element_71">
        <rect width="626" height="626" x="0" y="0"></rect>
      </clipPath>
    </defs>
    <g clipPath="url(#__lottie_element_71)">
      <g
        transform="matrix(1,0,0,1,334.8314208984375,313)"
        opacity="1"
        style={{ display: "block" }}
      >
        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity="0"
            stroke="rgb(255,240,240)"
            strokeOpacity="1"
            strokeWidth="50"
            d=" M92.5,-86.5 C92.5,-86.5 188.5,13 188.5,13 C188.5,13 87.5,118 87.5,118"
          ></path>
        </g>
      </g>
      <g
        transform="matrix(1,0,0,1,227.37789916992188,313)"
        opacity="0.66"
        style={{ display: "block" }}
      >
        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity="0"
            stroke="rgb(253,216,214)"
            strokeOpacity="1"
            strokeWidth="50"
            d=" M92.5,-86.5 C92.5,-86.5 188.5,13 188.5,13 C188.5,13 87.5,118 87.5,118"
          ></path>
        </g>
      </g>
      <g
        transform="matrix(1,0,0,1,118.31800079345703,313)"
        opacity="0.33"
        style={{ display: "block" }}
      >
        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity="0"
            stroke="rgb(255,144,140)"
            strokeOpacity="1"
            strokeWidth="50"
            d=" M92.5,-86.5 C92.5,-86.5 188.5,13 188.5,13 C188.5,13 87.5,118 87.5,118"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

export const CircleIcon = () => (
  <svg
    width="0.25rem"
    height="0.25rem"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: "#d1d1d1" }}
  >
    <circle cx="8" cy="8" r="8" />
  </svg>
);

export const SquareIcon = ({ fill, stroke }) => (
  <svg
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: "currentColor" }}
  >
    <rect
      x="0.5"
      y="0.5"
      width="23"
      height="23"
      rx="3.5"
      fill={fill}
      stroke={stroke}
    />
  </svg>
);

export const SeatIcon = ({
  seatType,
  fill,
  stroke,
  selected,
  gender,
  filter,
}) => {
  return seatType === "SLEEPER" ? (
    <svg
      className={` ${
        gender && (gender === "M" ? "booked-male" : "booked-female")
      }`}
      width="64"
      height="30"
      viewBox="0 0 60 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="59"
        height="29"
        rx="3.5"
        fill={fill}
        stroke={stroke}
      ></rect>
      <rect
        x="56.5"
        y="5.5"
        width="3"
        height="19"
        rx="1.5"
        fill="#FFFFFF"
        stroke={stroke}
      ></rect>
    </svg>
  ) : (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7568 5.58197H15.5946C15.0811 5.58197 12 5.58197 12 3.04098C12 1.0082 13.7117 0.5 14.5676 0.5H24.3243C29.6649 0.906557 30.5 5.41257 30.5 7.61475V23.8852C30.5 29.5 24.8378 30.5 23.8108 30.5H14.5676C13.027 30.5 12 30.4918 12 27.9508C12 25.918 13.7117 25 14.5676 25H20.2162C22 25 25 24.9016 25 22.8689V8.5C25 6.06066 22.955 5.58197 21.7568 5.58197Z"
        fill=""
      ></path>
      <rect y="3" width="25" height="25" rx="4" fill={fill}></rect>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6453 0.584801C13.2694 0.142591 14.0033 0 14.5 0H24.0192L24.0383 0.00144939C26.7974 0.210319 28.557 1.48384 29.613 3.00722C30.6547 4.50993 31 6.23503 31 7.38095V23.619C31 27.0066 29.3925 28.8849 27.6249 29.8885C25.8951 30.8706 24.0471 31 23.5 31H14.5C13.7143 31 12.9166 30.8758 12.3339 30.3023C11.7554 29.7329 11.5 28.8309 11.5 27.5556C11.5 26.4111 11.9958 25.6483 12.6453 25.188C13.2694 24.7458 14.0033 24.6032 14.5 24.6032H20C21.8074 24.6032 22.9511 24.4744 23.6378 24.1576C23.9623 24.0079 24.1634 23.8251 24.2909 23.6056C24.4219 23.3799 24.5 23.0722 24.5 22.6349V8.36508C24.5 7.37872 24.0285 6.78849 23.4249 6.42192C22.7947 6.03916 22.0173 5.90476 21.5 5.90476H15.4937C15.2321 5.90479 14.2825 5.90487 13.383 5.56442C12.9242 5.39078 12.4507 5.11854 12.0903 4.68726C11.7232 4.24785 11.5 3.6743 11.5 2.95238C11.5 1.80788 11.9958 1.04508 12.6453 0.584801ZM13.2297 1.38345C12.8376 1.66127 12.5 2.12863 12.5 2.95238C12.5 3.46062 12.6518 3.80969 12.8628 4.06224C13.0806 4.32292 13.3883 4.512 13.742 4.64589C14.4602 4.91773 15.2523 4.92063 15.5 4.92063H21.5C22.1493 4.92063 23.122 5.08148 23.9501 5.58443C24.8049 6.10357 25.5 6.98953 25.5 8.36508V22.6349C25.5 23.1818 25.4031 23.6737 25.1591 24.0938C24.9116 24.5202 24.5377 24.8294 24.0622 25.0487C23.1489 25.47 21.7926 25.5873 20 25.5873H14.5C14.1633 25.5873 13.6472 25.6907 13.2297 25.9866C12.8376 26.2644 12.5 26.7318 12.5 27.5556C12.5 28.7405 12.7446 29.3147 13.0411 29.6064C13.3334 29.8941 13.7857 30.0159 14.5 30.0159H23.5C23.9529 30.0159 25.6049 29.8992 27.1251 29.0361C28.6075 28.1945 30 26.6283 30 23.619V7.38095C30 6.3946 29.6952 4.87208 28.787 3.56183C27.8953 2.27557 26.4102 1.17316 23.9805 0.984127H14.5C14.1633 0.984127 13.6472 1.08757 13.2297 1.38345Z"
        fill={
          selected
            ? "#3DC070"
            : gender
            ? gender === "M"
              ? "#52b2ff"
              : "#fe98cc"
            : filter
            ? "#3AB56A"
            : "#C6C6C6"
        }
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.73348 3.71775C2.66649 3.13928 3.76564 2.95312 4.5 2.95312H12.5V3.93725H4.5C3.90103 3.93725 3.00018 4.09554 2.26652 4.55041C1.55974 4.98861 1 5.70162 1 6.88963V24.1119C0.999994 24.8094 1.12107 25.6617 1.64631 26.3337C2.15222 26.9809 3.11019 27.5563 5 27.5563H12.5V28.5404H5C2.88981 28.5404 1.59777 27.8857 0.853684 26.9337C0.128916 26.0065 -6.67546e-06 24.8905 2.59235e-10 24.1119V6.88963C2.59235e-10 5.32209 0.773597 4.31287 1.73348 3.71775Z"
        fill={
          selected
            ? "#3DC070"
            : gender
            ? gender === "M"
              ? "#52b2ff"
              : "#fe98cc"
            : filter
            ? "#3AB56A"
            : "#C6C6C6"
        }
      ></path>
    </svg>
  );
};

export const SteeringIcon = () => {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      width="2rem"
      height="2rem"
      fill="currentColor"
      style={{ color: "rgb(122, 122, 122)" }}
    >
      <g transform="matrix(0.022438, 0, 0, 0.022438, 0.781086, 0.781028)">
        <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
          <path d="M4456.6,4992.6c-1186-146.8-2204.3-655.9-3009.9-1500.5C757.8,2770.3,335.5,1928.7,152.8,922.4c-68.9-392.3-71.9-1230.9,0-1617.3c128.8-715.8,437.3-1458.6,835.6-2021.6c242.6-344.4,829.6-934.4,1171-1174c937.4-661.9,2126.4-985.3,3234.6-883.5c694.8,65.9,1144.1,191.7,1773,497.2c518.1,254.5,853.6,497.1,1287.8,931.4c197.7,197.7,446.3,482.2,551.1,628.9C9221.6-2411,9539-1782,9652.8-1431.7c335.4,1009.3,329.4,2129.4-18,3141.7c-122.8,365.4-404.3,913.5-634.9,1239.9c-239.6,341.4-829.6,928.4-1174,1171c-560.1,395.3-1317.8,709.8-2006.6,832.6C5492.8,5010.5,4765,5031.5,4456.6,4992.6z M5585.7,4019.2c1233.9-182.7,2330.1-964.4,2914.1-2081.5l152.7-296.5H4998.7H1341.8l107.8,218.6c380.4,760.7,1000.3,1389.7,1755.1,1773C3947.4,4010.2,4762.1,4142,5585.7,4019.2z M5352,997.3c545.1-191.7,691.9-904.5,266.6-1290.8c-161.7-143.8-302.5-197.7-518.1-200.6c-212.6,0-356.4,53.9-518.1,203.7c-173.7,155.8-245.6,320.5-245.6,560.1C4336.8,805.6,4848.9,1174,5352,997.3z M1955.8,23.9c290.5-74.9,679.9-254.6,928.4-434.3c275.5-197.7,637.9-596,802.6-886.5c263.6-464.2,407.3-1078.2,365.4-1554.4c-21-239.6-119.8-703.8-164.7-775.7c-32.9-56.9-188.7-12-566,164.7c-425.3,200.7-760.7,437.3-1111.1,790.7c-622.9,620-994.3,1350.7-1123.1,2216.3c-24,155.7-44.9,350.4-44.9,431.3v146.8l338.4-18C1563.4,95.8,1824,59.9,1955.8,23.9z M8949-27c0-80.9-21-272.5-44.9-428.3c-128.8-865.6-500.2-1599.3-1123.1-2216.3c-353.4-353.4-691.8-593-1111.1-790.7c-425.3-197.7-404.3-197.7-461.2-12c-128.8,440.2-137.8,1132.1-18,1536.4c74.9,245.6,263.6,649.9,392.3,838.6c488.2,709.8,1371.7,1198,2195.3,1210l170.7,3V-27z"></path>
        </g>
      </g>
    </svg>
  );
};

export const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="126px"
    height="27.52px"
    fill="none"
    viewBox="0 0 183 40"
    id="abhibus-logo"
    style={{ color: "gray", verticalAlign: "middle" }}
  >
    <g clipPath="url(#main_logo_svg__clip0_576_4713)">
      <path
        fill="#C32629"
        d="M16.599 36.199h-.102c-.84 1.354-1.96 2.327-3.355 2.916-1.395.59-2.867.886-4.416.886-1.145 0-2.246-.165-3.303-.496a8.22 8.22 0 0 1-2.8-1.486A7.086 7.086 0 0 1 .705 35.57c-.473-.97-.706-2.1-.706-3.386 0-1.458.26-2.691.783-3.697a7.171 7.171 0 0 1 2.12-2.5 10.334 10.334 0 0 1 3.053-1.535 21.843 21.843 0 0 1 3.556-.81 33.347 33.347 0 0 1 3.682-.312c1.227-.032 2.361-.052 3.405-.052 0-1.387-.48-2.491-1.44-3.308-.958-.814-2.092-1.223-3.404-1.223-1.313 0-2.38.269-3.405.809-1.027.537-1.941 1.277-2.748 2.215L1.564 17.5a13.779 13.779 0 0 1 4.945-3.049 17.169 17.169 0 0 1 5.852-1.017c2.218 0 4.044.286 5.475.859 1.428.572 2.573 1.414 3.43 2.527.856 1.11 1.455 2.473 1.79 4.087.335 1.615.505 3.482.505 5.6v12.865h-6.96v-3.177l-.003.003Zm-1.868-7.917c-.57 0-1.287.025-2.144.08-.857.052-1.683.2-2.471.44-.791.245-1.464.61-2.019 1.095-.554.488-.832 1.165-.832 2.03 0 .938.388 1.635 1.162 2.084.774.453 1.582.677 2.422.677.738 0 1.455-.104 2.144-.312a6.27 6.27 0 0 0 1.843-.886 4.255 4.255 0 0 0 1.287-1.458c.32-.59.481-1.283.481-2.083v-1.667h-1.873ZM29.01 0h7.567v16.77h.102c.873-1.213 1.993-2.074 3.355-2.579 1.362-.501 2.834-.754 4.416-.754 1.749 0 3.311.373 4.692 1.119a10.987 10.987 0 0 1 3.507 2.993c.958 1.25 1.697 2.684 2.218 4.299.522 1.614.783 3.306.783 5.076 0 1.911-.286 3.665-.857 5.26-.571 1.599-1.386 2.978-2.446 4.14a10.987 10.987 0 0 1-3.809 2.708c-1.48.642-3.127.965-4.945.965-.876 0-1.7-.123-2.471-.364a10.448 10.448 0 0 1-2.145-.938 8.987 8.987 0 0 1-1.716-1.277 8.438 8.438 0 0 1-1.186-1.382h-.102v3.334h-6.96V0h-.003Zm8.55 31.354c1.06 1.182 2.548 1.771 4.465 1.771 1.917 0 3.405-.59 4.465-1.77 1.06-1.18 1.59-2.726 1.59-4.636 0-1.91-.53-3.454-1.59-4.636-1.06-1.178-2.548-1.77-4.465-1.77-1.917 0-3.405.592-4.465 1.77-1.06 1.182-1.59 2.728-1.59 4.636s.53 3.456 1.59 4.635ZM67.652 0v17.5h.102c.167-.485.453-.97.856-1.458.404-.486.89-.919 1.464-1.302.57-.381 1.244-.694 2.018-.938a8.442 8.442 0 0 1 2.523-.364c1.917 0 3.463.304 4.64.912 1.179.609 2.093 1.45 2.75 2.525.656 1.077 1.1 2.344 1.337 3.802.236 1.458.354 3.037.354 4.74v13.958h-7.568V26.979c0-.729-.024-1.486-.077-2.267a7.28 7.28 0 0 0-.453-2.16 3.737 3.737 0 0 0-1.161-1.614c-.522-.417-1.269-.625-2.246-.625-.978 0-1.766.183-2.373.548a3.668 3.668 0 0 0-1.386 1.458 6.087 6.087 0 0 0-.632 2.056 18.185 18.185 0 0 0-.15 2.396v12.604h-7.568V0h7.57ZM89.825 2.89c.856-.885 1.891-1.33 3.102-1.33 1.211 0 2.246.445 3.103 1.33.857.885 1.288 1.952 1.288 3.202S96.89 8.41 96.03 9.296c-.857.886-1.892 1.327-3.103 1.327-1.21 0-2.246-.444-3.103-1.327-.856-.885-1.287-1.951-1.287-3.204 0-1.253.428-2.32 1.287-3.202Zm-.681 11.17h7.567v25.313h-7.567V14.06Z"
      ></path>
      <path
        fill="#541717"
        d="M102.867 0h7.568v16.77h.101c.873-1.213 1.994-2.074 3.356-2.579 1.362-.501 2.833-.754 4.415-.754 1.749 0 3.311.373 4.693 1.119a10.987 10.987 0 0 1 3.506 2.993c.958 1.25 1.697 2.684 2.219 4.299.521 1.614.782 3.306.782 5.076 0 1.911-.285 3.665-.856 5.26-.572 1.599-1.387 2.978-2.447 4.14a10.987 10.987 0 0 1-3.808 2.708c-1.48.642-3.128.965-4.946.965a8.238 8.238 0 0 1-2.471-.364 10.443 10.443 0 0 1-2.144-.938 8.975 8.975 0 0 1-1.717-1.277 8.475 8.475 0 0 1-1.186-1.382h-.101v3.334h-6.961V0h-.003Zm8.551 31.354c1.06 1.182 2.548 1.771 4.464 1.771 1.917 0 3.405-.59 4.465-1.77 1.06-1.18 1.59-2.726 1.59-4.636 0-1.91-.53-3.454-1.59-4.636-1.06-1.178-2.548-1.77-4.465-1.77-1.916 0-3.404.592-4.464 1.77-1.06 1.182-1.59 2.728-1.59 4.636s.53 3.456 1.59 4.635ZM157.553 39.375h-7.265v-3.438h-.102a8.56 8.56 0 0 1-1.035 1.459 6.76 6.76 0 0 1-1.538 1.302 8.776 8.776 0 0 1-2.067.937 8.448 8.448 0 0 1-2.524.365c-1.916 0-3.473-.304-4.668-.913-1.194-.606-2.119-1.45-2.773-2.525-.656-1.074-1.093-2.343-1.312-3.802-.22-1.458-.327-3.037-.327-4.74V14.064h7.567v12.395c0 .73.025 1.486.077 2.265.05.78.201 1.502.453 2.162.253.661.64 1.198 1.162 1.615.522.417 1.268.625 2.246.625.977 0 1.766-.184 2.372-.548a3.674 3.674 0 0 0 1.387-1.459c.319-.605.53-1.293.632-2.055.101-.763.151-1.563.151-2.396V14.062h7.567v25.313h-.003ZM176.774 21.511c-1.109-1.422-2.573-2.135-4.388-2.135a4.03 4.03 0 0 0-1.867.468c-.604.313-.909.853-.909 1.615 0 .625.311 1.086.934 1.382.62.296 1.411.556 2.37.781.958.227 1.985.469 3.078.73 1.092.26 2.119.668 3.078 1.224a7.006 7.006 0 0 1 2.372 2.265c.621.956.934 2.231.934 3.826 0 1.596-.346 2.977-1.035 4.038a8.026 8.026 0 0 1-2.65 2.552c-1.077.645-2.287 1.094-3.633 1.355-1.345.26-2.674.389-3.984.389-1.716 0-3.449-.252-5.195-.754-1.749-.502-3.229-1.398-4.44-2.684l4.591-5.26c.705.905 1.488 1.587 2.345 2.056.856.468 1.859.704 3.001.704.873 0 1.664-.131 2.37-.389.705-.26 1.059-.737 1.059-1.434 0-.658-.31-1.154-.933-1.485-.623-.33-1.411-.606-2.373-.834-.958-.224-1.985-.468-3.078-.729a12.496 12.496 0 0 1-3.078-1.173 6.486 6.486 0 0 1-2.369-2.215c-.624-.954-.934-2.231-.934-3.827 0-1.491.294-2.777.881-3.854a7.923 7.923 0 0 1 2.321-2.656c.958-.694 2.059-1.206 3.303-1.538a14.732 14.732 0 0 1 3.784-.494c1.614 0 3.245.245 4.893.73a9.055 9.055 0 0 1 4.187 2.604l-4.64 4.74.005.002Z"
      ></path>
    </g>
  </svg>
);

export const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
  </svg>
);
