/* eslint-disable */

import logo from './assets/logo.svg';
import takeoff from "./assets/takeoff.png";
import scheduled from "./assets/scheduled.png";
import active from "./assets/active.png";
import landed from "./assets/landed.png"
import cancelled from "./assets/cancelled.png";
import './App.css';import { styled } from "@mui/material/styles";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import Grid from "@mui/material/Grid";
import D34, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import blr from "./assets/blr.jpg";
import Scroll from './components/SmoothScroll';
import test from "./assets/test.jpeg"
import Data from "./abc.json";
import { PopperUnstyled } from '@mui/base';
import { Card } from '@mui/material';
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%"
});
function App() {
    return (
    <div className="App">
      <Paper sx={{
        width: "100%",
        height: 90,
        backgroundColor: "#FEDB0D",
        mb: 3,
        borderRadius: 0,
        boxShadow: 0,
      }}>
      <Typography id='airportname' variant='h1'sx={{
        fontSize: 40,
        color: '#191919',
        fontFamily: 'GilroyBold',
        textAlign: 'center',
        letterSpacing: 1,
      }}>Bangalore Airport</Typography>
      
      <Typography id='airporticao' sx={{
        fontSize: 18,
        fontFamily: 'GilroyMedium',
        textAlign: 'center',
      }}>VOBL</Typography>
</Paper>
 {Data.response.map((post) => {

var at = new Date(post.arr_time_utc + 'Z');
const dt = new Date (post.dep_time_utc + 'Z');
var dtconvert =  dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
var atconvert =  at.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });



    //Converting whatever status is to uppercase
    var rawstatus = post.status;
    var Sstatus = rawstatus.substring(0, 6);
    var status = Sstatus.toLocaleUpperCase();

  //Attaching image depending on the airline_icao
   var txt = post.airline_icao;
   const [loading] = qState(true);
   const [img, setImg] = useState();
   useEffect(() => {
     
     setImg(`https://firebasestorage.googleapis.com/v0/b/test-a61c3.appspot.com/o/api%2F${txt}.png?alt=media&token=c3ce225a-647f-44c1-8bbe-dfa842f1502d`);
   }, [loading]);

  //IF statements to display bg color based on status
  
if(post.status === "scheduled"){
    var bs = "#FF9901";
    var statusimg = scheduled;
   }  
if(post.status === "active"){
      var bs = "#04c95a"
      var statusimg = active;
    }
if(post.status === "cancelled"){
  var bs = "#FB3200"
  var statusimg = cancelled;
}
if(post.status === "diverted"){
var bs = "#FB3200"
}
if(post.status === "landed"){
 var bs = "#00684a"
 var statusimg = landed;
}
if(post.aircraft_icao == null){
  post.aircraft_icao = "UNKNOWN";
}
if(post.aircraft_icao == "UNKNOWN"){
  var aircraftcolour = "gray";
}
        return (
          <div style={{ padding: "0 5px" }}>
          {/* ======>Main Element<====== */}
          <Paper
            sx={{
              pt: 1,
              border: 1,
              borderColor: "#C1C1C1",
              borderRadius: 0,
              boxShadow: 0,
              margin: "auto",
              justifyContent: "center",
              mt: 1,
              maxWidth: 900,
              flexGrow: 1,
            }}
          >
            <Grid container spacing={1}>
              <Grid item>
                <ButtonBase disableRipple sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src={img} />
                </ButtonBase>
              </Grid>
              <Grid item xs={5} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography sx={{paddingLeft:1,}}
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      fontWeight="500"
                      fontSize={19}
                      fontFamily="Roboto"
                    >
                      {post.flight_icao} 

                      <Typography fontSize={15} variant="h6" color={aircraftcolour} sx={{mt:-.5,}}>{post.aircraft_icao}</Typography>

                    </Typography>

                    <Typography sx={{paddingLeft:1}}>
                      {atconvert}
                      </Typography>

                    <Typography variant="body2" gutterBottom sx={{paddingLeft:1}}>
                      {post.dep_icao}
                    </Typography>
                  <div style={{ paddingLeft:7 }}>
                      <Paper
                      sx={{
                        width: '-moz-fit-content',
                        width: 'fit-content',
                        alignItems: 'center',
                        minWidth: 90,
                        boxShadow: 0,
                        borderRadius: 0,
                        backgroundColor: bs,
                        }}>
                       
                    <Typography  variant="body2" color="white" sx={{textAlign:'center', fontWeight:'normal', alignItems:'center', display:'flex', }}>
                    <Img alt="statusimg" src={statusimg} width={20} height ={20} sx={{
                      mr: .4,
                      ml: .4,
                    }}/> {status}
                    </Typography>
                    </Paper>
                    </div>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid item>

                </Grid>
              </Grid>
            </Grid>
          </Paper>
          </div>
        );
      })}
    </div>
  );
}
    

export default App;
