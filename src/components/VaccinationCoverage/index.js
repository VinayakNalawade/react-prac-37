import {
  ResponsiveContainer,
  Bar,
  Legend,
  XAxis,
  YAxis,
  BarChart,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {list} = props

  const data = list.map(each => ({
    vaccineDate: each.vaccine_date,
    dose1: each.dose_1,
    dose2: each.dose_2,
  }))

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="chartContainer">
      <h1 className="chartheading">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: 'gray', strokeWidth: 1}}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{stroke: 'gray', strokeWidth: 0}}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose1" fill="#5a8dee" name="Dose 1" barSize="20%" />
          <Bar dataKey="dose2" fill="#f54394" name="Dose 2" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationCoverage
