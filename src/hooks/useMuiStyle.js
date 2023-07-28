import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  //Header.tsx
  // headerContainer: {
  //   height: "98px !important",
  // },
  headerCon: {
    height: "98px !important",
    "@media screen and (min-width: 1023px) and (max-width: 1240px)": {
      height: "74px !important",
    },
  },
  headerFixed: {
    position: "fixed",
    top: "0 !important",
    width: "100%",
    zIndex: "999",
    backgroundColor: "#ffffff !important",
    boxShadow: "none !important",
    // top: "36px !important",
  },
  hearderToolbar: {
    justifyContent: "space-around ",
  },
  appBar: {
    backgroundColor: "#ffffff !important",
    boxShadow: "none !important",
    top: "36px !important",
  },
  headerLogo: {
    width: "100%",
    maxHeight: "92px",
    "@media (max-width: 780px)": {
      maxHeight: "80px",
    },
  },
  headerlogoContainer: {
    "@media (max-width: 780px)": {
      marginLeft: "77px",
    },
  },
  //HeaderTopPart
  topPart: {
    padding: "0.6rem !important",
    color: " #e3e3e3",
    lineHeight: "1.2em",
    fontWeight: "lighter",
    textAlign: "center",
    letterSpacing: "1px",
    height: "16px",
    // backgroundImage:"linear-gradient(to right ,  #BF6B15,#16754D, #305D66, #BF6B15);",
    backgroundImage: "linear-gradient(to right top, #16754D, #002831);",
    "& P": {
      fontSize: "16px",
      margin: "0px",
    },
  },
  //HeaderSearch.tsx
  headerSerachContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: "0.2px solid #e7e7e7",
    borderRadius: "4px",
    background: "#f5f5f6",
  },
  headerFullContain: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginLeft: "100px",
  },
  searchInput: {
    width: "370px",
  },
  storeinputData: {
    padding: "0px 10px !important",
  },
  searchDropdown: {
    "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
      {
        padding: "16px 14px",
        marginTop: "3px",
        width: "25% !important",
        maxHeight: "500px",
      },
  },
  searchBox1: {
    "& .css-1g24dm6-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "12.5px 14px !important",
    },
  },
  searchBox: {
    position: "absolute",
    background: "#eeeeee",
    width: "100%",
    top: "44px",
  },
  hsTextField: {
    // height:"70px !important"
  },
  hsinput: {
    width: "550px !important",
    padding: "12.5px 1px 11px 13px",
    border: "none",
    fontSize: "1rem",
    borderRadius: "4px",
    background: "#f5f5f6",
  },
  hsSearchIco: {
    // backgroundImage:"linear-gradient(to right top,  #BF6B15,#16754D, #305D66, #BF6B15);",
    backgroundImage: "linear-gradient(to right top, #16754D, #002831);",
    height: "100%",
    alignItems: "center",
    display: "flex",
    padding: "1px 17px",
    borderRadius: "0px 4px 4px 0px",
  },

  //headerCart
  headerSideContainer: {
    display: "flex",
    "& div": {
      marginLeft: "19px",
    },
  },
  cartImgContainer: {
    width: "64px",
    height: "64px",
    marginRight: "20px",
    flex: "0 0 auto",
    overflow: " hidden",
  },
  headersearchList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "5px 0px",
    cursor: "pointer",
  },
  bagCartListDetails: {
    fontFamily: "Vujahday Script, cursive !important",
    fontSize: "1.2rem !important",
  },
  bagCartText: {
    color: "#3c3c3c !important",
    marginBottom: "4px !important",
  },
  //HeaderLocation.tsx
  locationConatiner: {
    display: "flex",
    cursor: "pointer",
    flexDirection: "column",
    alignItems: "center",
  },
  locationWrap: {
    marginLeft: "10px",
    display: "flex",
    position: "static",
    float: "none",
    flexFlow: "column nowrap",
  },
  locationHello: {
    color: "#ccc",
    fontSize: "14px",
    marginBottom: "6px",
    lineHeight: "14px",
    height: "14px",
    fontWeight: 400,
  },
  locationAddress: {
    fontSize: "14px",
    lineHeight: "15px",
    fontWeight: 700,
    color: "#3a3a3a",
    marginTop: "10px",
  },
  //headermobile
  headermbl: {
    fontFamily: "Vujahday Script, cursive !important",
    padding: "5px 0px 5px 8px !important",
    textAlign: "left !important",
    backgroundImage: "linear-gradient(to right top, #16754D, #002831);",
    fontSize: "16px !important",
    color: "white",
  },
  headermblsub: {
    fontFamily: "Vujahday Script, cursive !important",
    fontSize: "1rem !important",
    marginTop: "8px !important",
    padding: "10px 0px!important",
    transition: "1s ease !important",
    backgroundColor: "#002831",
    color: "white",
  },
  listItems: {
    "&.css-10hburv-MuiTypography-root": {
      fontFamily: "Vujahday Script, cursive !important",
    },
  },
  menudrp: {
    fontFamily: "Vujahday Script, cursive !important",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    margin: "10px 0px",
  },
  menydrptitle: {
    fontSize: "1.6rem !important",
    lineHeight: "1.3rem !important",
    fontFamily: "Vujahday Script, cursive !important",
    position: "relative",
    "@media (max-width: 800px)": {
      fontSize: "1rem !important",
    },
  },
  //HeaderPart.tsx
  headerPartContainer: {
    // backgroundImage: "linear-gradient(to right top, #16754D, #002831);",
    backgroundColor: "#F5F5F6",
    listStyle: "none",
    top: "0",
    fontWeight: "550",
  },
  partListItems1: {
    textTransform: "uppercase",
    fontSize: "13px",
  },
  headerPartContainer1: {
    position: "fixed",
    backgroundImage: "linear-gradient(to right top, #16754D, #002831);",
    listStyle: "none",
    width: "100%",
    top: "95px",
    zIndex: "200",
    color: "white",
    fontWeight: "550",
    "@media screen and (min-width: 1023px) and (max-width: 1240px)": {
      top: "69px",
    },
  },
  headerPartLists: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    float: "none",
    margin: "0 auto",
    width: "100%",
    maxWidth: "80%",
  },

  //carousell
  carouselImgContainer: {
    float: "none",
    margin: "0 auto",
    width: "100%",
    maxWidth: "90%",
    marginTop: "10px",
  },

  carouselMainImg: {
    width: "100%",
    height: "435px",
    "& img": {
      width: "100%",
      objectFit: "cover",
      borderRadius: "30px",
      maxHeight: "27em",
    },
    "@media (max-width: 780px)": {
      height: "100%",
      "& img": {
        maxHeight: "12em",
      },
    },
  },
  sideslideImg1: {
    // width:"100px",
    // height:"100px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    "& img": {
      width: "239px",
      borderRadius: "10px",
      objectFit: "cover",
      maxHeight: "13em",
    },
  },
  sideslideImg2: {
    // width:"100px",
    // height:"100px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "10px",
    "& img": {
      width: "239px",
      borderRadius: "10px",
      borderRadius: "10px",
      objectFit: "cover",
      maxHeight: "13em",
    },
  },

  //ProdctCard.jsx
  viewCardHeader: {
    "& h3": {
      padding: "20px 0px",
      textAlign: "center",
      fontSize: "25px",
      fontFamily: "'Vujahday Script', cursive",
    },
  },
  freshArraival: {
    float: "none",
    margin: "0 auto",
    width: "100%",
    maxWidth: "93%",
    marginBottom: "30px",
    padding: "0px 10px 20px 10px",
  },
  //celebrate
  midRowSection: {
    textAlign: "center",
    float: "none",
    margin: "0 auto !important",
    width: "100%",
    maxWidth: "95%",
  },
  midLeft: {
    position: "relative",
    minHeight: "1px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },

  //googleREview
  grVLeftHeader: {
    marginBottom: "1px !important",
    textAlign: "left !important",
  },
  reviewAlign: {
    float: "none",
    margin: "0 auto !important",
    width: "100%",
    maxWidth: "90%",
  },
  socialImg: {
    display: "flex",
    width: "100px",
    "& img": {
      width: "100%",
      marginLeft: "20px",
    },
    "@media (max-width: 780px)": {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      "& img": {
        width: "80px",
      },
    },
  },
  ratingsNum: {
    fontSize: "6rem",
    color: "#009d48",
    margin: "0 0 0 42px",
    textAlign: "left",
    "& span": {
      fontSize: "1.5rem",
    },
    "@media (max-width: 780px)": {
      textAlign: "left",
      margin: "0px",
      fontSize: "3rem",
      "& span": {
        fontSize: "0.875rem",
      },
    },
  },
  startRating: {
    display: "flex",
    alignItems: "center",
    marginLeft: "42px",
    "@media (max-width: 780px)": {
      margin: "0px",
      paddingBottom: "10px",
    },
  },
  reviewContainer: {
    padding: "1rem 2rem",
    borderRadius: "16px",
    background: "#fff",
    marginLeft: "75px",
    marginBottom: "20px",
    "@media (max-width: 780px)": {
      marginLeft: "0px",
    },
  },
  ratingHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingName: {
    margin: "0px !important",
  },
  gReviewPartRight: {
    height: "calc(100vh - 35vh)",
    overflowY: "scroll",
    overflowY: "scroll", // Enable vertical scrollbar
    "&::-webkit-scrollbar": {
      width: "7px", // Set the desired width for webkit-based browsers
      height: "10px !important",
      borderRadius: "20px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1", // Set the background color of the track for webkit-based browsers
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888", // Set the color of the thumb for webkit-based browsers
    },
    scrollbarWidth: "thin", // Set the desired width for Firefox and some newer browsers
    "&::-moz-scrollbar-track": {
      background: "#f1f1f1", // Set the background color of the track for Firefox and some newer browsers
    },
    "&::-moz-scrollbar-thumb": {
      background: "#888", // Set the color of the thumb for Firefox and some newer browsers
    },
  },

  //AllProducts
  allProductsHeading: {
    fontSize: "28px !important",
    color: "#008f6a",
    fontWeight: "700 !important",
    margin: " 70px 0 50px",
    position: "relative",
    display: "block",
    paddingBottom: "10px",
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    textTransform: "uppercase",
    textAlign: "center",
  },

  //menu
  menuContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#00000024",
    marginTop: "1px !important",
    width: "100%",
    "& img": {
      width: "100%",
      maxHeight: "24em",
      height: "100%",
      objectFit: "cover",
    },
  },
  menuAllign: {
    paddingLeft: "10px !important",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 500px)": {
      maxWidth: "100% !important",
      padding: "10px !important",
    },
  },

  singleProductContainer: {
    textAlign: "center",
    float: "none",
    maxWidth: "78%",
    margin: "0 auto !important",
    padding: "20px 0px",
    "@media (max-width: 500px)": {
      display: "block !important",
    },
  },
  singleProductcolumn: {
    "@media (max-width: 500px)": {
      maxWidth: "100% !important",
      paddingLeft: "0px !important",
    },
  },
  singleProductimgSec: {
    boxShadow: "none !important",
    borderRadius: "16px !important",
    marginBottom: "30px !important",
    "@media (max-width: 500px)": {
      height: "100% !important",
    },
  },
  singleProductimgSecChild: {
    cursor: "pointer",
    width: "100%",
    height: "100%",
  },
  singleProductrightAllign: {
    paddingLeft: "100px !important",
    "@media (max-width: 500px)": {
      maxWidth: "100% !important",
      padding: "10px !important",
    },
  },

  //sp
  spcontentContainer: {
    textAlign: "left",
  },
  spheader: {
    fontSize: "2.625rem !important",
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    paddingBottom: "15px",
    "@media (max-width: 800px)": {
      fontSize: "1.625rem !important",
    },
  },
  spprice: {
    fontSize: "1.5rem !important",
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    paddingBottom: "15px",
    "@media (max-width: 800px)": {
      fontSize: "1.25rem !important",
    },
  },
  pCode: {
    fontSize: "1.25rem !important",
    fontFamily: "T-Star Pro !important",
    marginLeft: "16px",
    color: "#6e6e73",
  },
  pText: {
    fontSize: "1.25rem !important",
    lineHeight: "1.9rem !important",
    marginBottom: "25px !important",
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    "@media (max-width: 800px)": {
      fontSize: "1rem !important",
    },
  },
  pTextRead: {
    fontSize: "1.25rem !important",
    lineHeight: "1.9rem !important",
    marginBottom: "25px !important",
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    textDecoration: "underline",
    cursor: "pointer",
  },
  spqnty: {
    fontSize: "1rem !important",
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    marginBottom: "18px !important",
  },
  spinputContainer: {
    position: "relative",
  },
  spinputBox: {
    position: "relative",
    outline: " none",
    width: "95px",
    backgroundColor: " #fff",
    border: " 1px solid #3c3c3c",
    borderRadius: " 8px",
    padding: "8px 48px 8px 7px",
    height: "56px",
    textAlign: " center",
    cursor: "pointer",
  },
  sparrowContainer: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "#fff",
    top: 0,
    right: "68%",
    width: "calc(17% - 6px)",
    height: "100%",
    border: " 1px solid #3c3c3c",
    borderRadius: "0 8px 8px 0",
    display: "flex",
    flexDirection: "column",
    padding: "0 6px 0",
    alignItems: "center",
    justifyContent: "center",
    cursor: " pointer",
    "@media screen and (min-width: 1650px) and (max-width: 2200px)": {
      right: "82%",
      width: "calc(10% - 6px)",
    },
    "@media (max-width: 500px)": {
      right: "59%",
      width: "calc(22% - 6px)",
    },
    "@media screen and (min-width: 501px) and (max-width: 800px)": {
      right: "52%",
      width: "calc(26% - 6px)",
    },
  },
  spupArrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer !important",
    width: "16px",
    height: "16px",
  },
  spcartBtn: {
    width: "95% !important",
    backgroundColor: "#009f76 !important",
    color: "#fff !important",
    fontSize: "1.2rem !important",
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    borderRadius: "56px !important",
    padding: "14px 16px !important",
    margin: "30px 0px !important",
    "@media (max-width: 800px)": {
      fontSize: "0.875rem !important",
      textTransform: "capitalize !important",
    },
  },
  spcartBtn1: {
    width: "40% !important",
    backgroundColor: "#009f76 !important",
    color: "#fff !important",
    fontSize: "1.1rem !important",
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    borderRadius: "4px !important",
    textTransform: "capitalize !important",
    padding: "5px 5px !important",
    // margin: "30px 0px !important",
    "@media (max-width: 800px)": {
      fontSize: "0.875rem !important",
      textTransform: "capitalize !important",
    },
  },
  //Acordian
  productDetailAccordianContainer: {
    margin: "20px 0px",
  },
  accTitle: {
    fontSize: "1.6rem !important",
    lineHeight: "1.3rem !important",
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    paddingLeft: "30px !important",
    position: "relative",
    "@media (max-width: 800px)": {
      fontSize: "1rem !important",
    },
  },
  accordianContent: {
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    fontSize: "1.25rem !important",
    lineHeight: "1.6rem !important",
    padding: "0 32px",
    marginBottom: "17px",
    "@media (max-width: 800px)": {
      fontSize: "1rem !important",
      padding: "0 4px",
    },
  },
  acclists: {
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    fontSize: "1.25rem !important",
    lineHeight: "1.6rem !important",
  },
  productDetailacclistitems: {
    marginTop: "32px",
  },
  acclistTexts: {
    paddingBottom: "12px",
    listStyleType: "disc",
    marginLeft: "14px",
    textAlign: "left",
    lineHeight: "2.5rem !important",
    marginRight: "22px",
    color: "#000",
  },
  accTable: {
    borderCollapse: "collapse",
    borderColor: "#6e6e73",
  },
  accTableHead: {
    padding: "6px 16px",
    fontWeight: "400",
  },
  accTableContent: {
    marginRight: "20px !important",
    marginTop: "30px !important",
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    fontSize: "1.25rem !important",
    lineHeight: "1.6rem !important",
  },

  footerContainer: {
    backgroundImage: "linear-gradient(to right top, #16754D, #002831);",
    paddingTop: "40px",
  },
  footerBottom: {
    background: "#002831",
    padding: "7px 0",
    fontSize: "12px",
  },
  fbContainer: {
    margin: "0 auto",
    width: "100%",
    maxWidth: "94%",
  },
  fbPrivacylists: {
    justifyContent: "flex-end",
    listStyle: "none",
    margin: "0",
    padding: "0",
    display:'flex',
    "& li": {
      color: "#fff",
      borderRight: "2px solid #fff",
      paddingRight: "9px",
      marginLeft:'10px'
    },
  },
  fbPhotolist:{
    listStyle: "none",
    margin: "0",
    padding: "0",
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    fontSize: "0.875rem !important",
    color:"#fff",
    "& li": {
      position: "relative",
      paddingLeft: "20px", 
      marginBottom:'8px',
      // Add padding to create space for the arrow
      transition: "transform 0.2s",
            "&::before": {
        content: "''",
        position: "absolute",
        left: 0,
        top: "30%",
        transform: "translateY(-50%)",
        width: "6px", // Adjust the arrow width as needed
        height: "6px", // Adjust the arrow height as needed
        borderLeft: "2px solid #fff", // Adjust the arrow color and size as needed
        borderBottom: "2px solid #fff", // Adjust the arrow color and size as needed
        transition: "transform 0.2s", // Optional: add a transition for the arrow animation
        transform :'rotate(225deg)'
      },
      "&:hover": {
        transform: "translateX(10px)", // Slide the whole li element to the right on hover
      },
    }
  },
  fbSocial:{
    "& ul":{
      listStyle:'none',
      display:'flex',
      alignItems:'center',
      padding:"0px"
    },
    "& li":{
      marginLeft:'10px',
      color:" #fff",
      fontSize: "15px",
      textAlign: "center",
      backgroundColor: "#002831",
      borderRadius: "3px",
      border: "1px solid #002831",
      padding: "5px 10px",
      paddingTop:'7px'
    }
  },
}));
