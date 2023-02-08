import {Pie, PieChart, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {list} = props

  return (
    <div className="chartContainer">
      <h1 className="chartheading">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="60%"
          data={list}
          dataKey="count"
          startAngle={180}
          endAngle={0}
          outerRadius="100%"
          innerRadius="60%"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
