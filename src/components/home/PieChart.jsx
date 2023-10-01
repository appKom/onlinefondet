import React from "react";
import { useEffect, useState } from "react"
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function PieChart(props) {
    const [pieData, setPieData] = useState([]);
    const [pieLabel, setPieLabel] = useState([]);
    const setError = (message) => {
    }

    const fetchOnlineFondData = async () => {
        const data = await fetch('/api/fonddata/getpositions').then((res) => res.json());
        if (data.error) {
            
            setPieData([]);
            
            setError(data.error);
        } else if (data.message) {
            const labelData=[];
            const dataPie=[];
            data.message.forEach((arr)=>{
                labelData.push(arr.instrument.name);
                const val= arr.percent.toString().slice(0, 4);
                dataPie.push(Number(val));
                  
              }); 
            setPieLabel(labelData);
            setPieData(dataPie);
        }
    }
    useEffect(() => {
        fetchOnlineFondData();
    }, [])

    return (
        <Box

        maxWidth={700}
        width={9/10}
        boxShadow={3}
        
        padding={3}
        borderRadius={4}
        margin={"0 auto"}
        >
        <ReactApexChart options={{
            chart: {
            stacked: false,
            height: 360,
            width: 380,
            type: 'donut',
            zoom: {
                enabled: false
              },
              toolbar: {
                show: false
              },
          },
          colors: ["#e60049", "#0bb4ff", "#50e991", "#e6d800", "#9b19f5", "#ffa300", "#dc0ab4", "#b3d4ff", "#00bfa0"],
          labels: pieLabel,
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
                
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }}series={pieData} type="donut"/>
        </Box>
      )
}