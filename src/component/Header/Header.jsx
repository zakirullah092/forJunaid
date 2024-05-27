import React from 'react';
import './Header.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { LineChart as MuiLineChart, lineElementClasses } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];
const data = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];

function Header() {
  return (
    <>
          <div className="main">
          <header>
    <ul>
        <li><h3>Rise AI</h3></li>
        <li><h2>Dashboard</h2></li>
        <li>
            <input type="search" placeholder="&#xf002; Search" class="search-input" />
        </li>
        <li>Requests</li>
        <li class="dropdown">
            <img src="./logo192.png" alt="" /> Home
           
        </li>
    </ul>
</header>
        <div className="content">
          <div className="left">
            <aside>
              <ul>
                <li><img src="./logo192.png" alt="" /> This is Aside. </li>
                <li><img src="./logo192.png" alt="" /> This is Aside. </li>
                <li><img src="./logo192.png" alt="" /> This is Aside. </li>
                <li><img src="./logo192.png" alt="" /> This is Aside. </li>
                <li><img src="./logo192.png" alt="" /> This is Aside. </li>
              </ul>
            </aside>
          </div>
          <div className="right">
            <div className="rightTop">
              <ul>
                <li>
                  <h4>This is Dabba </h4>
                  <h3>Some Content</h3>
                  <img src="./logo192.png" alt="" />
                </li>
                <li>
                  <h4>This is Dabba </h4>
                  <h3>Some Content</h3>
                  <img src="./logo192.png" alt="" />
                </li>
                <li>
                  <h4>This is Dabba </h4>
                  <h3>Some Content</h3>
                  <img src="./logo192.png" alt="" />
                </li>
                <li>
                  <h4>This is Dabba </h4>
                  <h3>Some Content</h3>
                  <img src="./logo192.png" alt="" />
                </li>
                <li>
                  <h4>This is Dabba </h4>
                  <h3>Some Content</h3>
                  <img src="./logo192.png" alt="" />
                </li>
                <li>
                  <h4>This is Dabba </h4>
                  <h3>Some Content</h3>
                  <img src="./logo192.png" alt="" />
                </li>
                <li>
                  <h4>This is Dabba </h4>
                  <h3>Some Content</h3>
                  <img src="./logo192.png" alt="" />
                </li>
                <li>
                  <h4>This is Dabba </h4>
                  <h3>Some Content</h3>
                  <img src="./logo192.png" alt="" />
                </li>
                <li>
                  <h4>This is Dabba </h4>
                  <h3>Some Content</h3>
                  <img src="./logo192.png" alt="" />
                </li>
                <li>
                  <h4>This is Dabba </h4>
                  <h3>Some Content</h3>
                  <img src="./logo192.png" alt="" />
                </li>
                <li>
                  <h4>This is Dabba </h4>
                  <h3>Some Content</h3>
                  <img src="./logo192.png" alt="" />
                </li>
                <li>
                  <h4>This is Dabba </h4>
                  <h3>Some Content</h3>
                  <img src="./logo192.png" alt="" />
                </li>
              </ul>
            </div>
            <div className="rightBottom">
              <ul>
                
                <li>
                  <LineChart
                    width={600}
                    height={300}
                    data={data}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </li>
                <li>
                  <MuiLineChart
                    width={500}
                    height={300}
                    series={[{ data: uData, label: 'uv', area: true, showMark: false }]}
                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                    sx={{
                      [`& .${lineElementClasses.root}`]: {
                        display: 'none',
                      },
                    }}
                  />
                              </li>
                              <li>
                  <LineChart
                    width={600}
                    height={300}
                    data={data}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </li>
                <li>
                  <MuiLineChart
                    width={500}
                    height={300}
                    series={[{ data: uData, label: 'uv', area: true, showMark: false }]}
                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                    sx={{
                      [`& .${lineElementClasses.root}`]: {
                        display: 'none',
                      },
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
