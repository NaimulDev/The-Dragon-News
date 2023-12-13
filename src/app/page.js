import LatestNews from "@/components/Ui/LatestNews/LatestNews";
import SideBar from "@/components/Ui/SideBar/SideBar";
// import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <>
      {/* <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
      </Grid> */}
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-6">
          <LatestNews />
        </div>
        <div className="col-span-2">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default HomePage;
