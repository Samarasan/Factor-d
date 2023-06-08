import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  //Header.tsx
  headerContainer: {
    height: "98px !important",
  },
  headerCon: {
    height: "98px !important",
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
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
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
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    marginTop: "8px !important",
  },
  headermblsub: {
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    fontSize: "1rem !important",
    marginTop: "8px !important",
    padding: "17px 0px!important",
    transition: "1s ease !important",
  },
  listItems: {
    "&.css-10hburv-MuiTypography-root": {
      fontFamily: "Poppins Arial Helvetica sans-serif !important",
    },
  },
  menudrp: {
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    margin: "10px 0px",
  },
  menydrptitle: {
    fontSize: "1.6rem !important",
    lineHeight: "1.3rem !important",
    fontFamily: "Poppins Arial Helvetica sans-serif !important",
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
    marginBottom:"1px !important",
    textAlign:"left !important"
  },
  reviewAlign:{
    float: "none",
    margin: "0 auto !important",
    width: "100%",
    maxWidth: "90%",
  },
  socialImg:{
    display:"flex",
    width:"100px",
    "& img":{
      width:"100%",
      marginLeft:"20px"
    }
  },
  ratingsNum:{
    fontSize:"6rem",
    color:"#009d48",
    margin:"0 0 0 42px",
    textAlign:"left",
    "& span":{
      fontSize:"1.5rem"
    },
  },
  startRating:{
    display:"flex",
    alignItems:'center',
    marginLeft:"42px"
  },
 reviewContainer:{
  padding:"1rem 2rem",
  borderRadius:"16px",
  background:"#fff",
  marginLeft:"75px",
  marginBottom:"20px"
  },
  ratingHead:{
    display:"flex",
    alignItems:'center',
    justifyContent:"space-between"
  },
  ratingName:{
    margin:"0px !important"
  },
  gReviewPartRight:{
    height:"calc(100vh - 35vh)",
    overflowY:"scroll",
    overflowY: 'scroll', // Enable vertical scrollbar
    '&::-webkit-scrollbar': {
      width: '7px', // Set the desired width for webkit-based browsers
      height:"10px !important",
      borderRadius:"20px"
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1', // Set the background color of the track for webkit-based browsers
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888', // Set the color of the thumb for webkit-based browsers
    },
    scrollbarWidth: 'thin', // Set the desired width for Firefox and some newer browsers
    '&::-moz-scrollbar-track': {
      background: '#f1f1f1', // Set the background color of the track for Firefox and some newer browsers
    },
    '&::-moz-scrollbar-thumb': {
      background: '#888', // Set the color of the thumb for Firefox and some newer browsers
    },
  },

}));
