import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import './single.scss';

type Props = {
  id: number;
  title: string;
  img?: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
}

const Single = (props: Props) => {
  return (
    <div className="single">

      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt={props.title} />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}:</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {props.chart.dataKeys.map((item) => (
                <Line key={item.name} type="monotone" dataKey={item.name} stroke={item.color} />
              ))}
              
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="activities">
        <h2>Latest Activities</h2>
        {props.activities &&
          <ul>
            {props.activities.map((item) => (
              <li key={item.time}>
                <div>
                  <span className="time">{item.text}</span>
                  <time className="text">{item.time}</time>
                </div>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  )
}

export default Single;