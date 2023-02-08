import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import VaccinationByAge from '../VaccinationByAge'

import VaccinationByGender from '../VaccinationByGender'

import VaccinationCoverage from '../VaccinationCoverage'

class CowinDashboard extends Component {
  state = {isLoading: '', detailsList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({isLoading: 'loading'})

    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(vaccinationDataApiUrl)
    const data = await response.json()

    if (response.ok) {
      const detailsList = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }

      this.setState({detailsList, isLoading: 'success'})
    } else {
      this.setState({isLoading: 'failure'})
    }
  }

  renderPage = () => {
    const {isLoading, detailsList} = this.state
    switch (isLoading) {
      case 'loading':
        return (
          <div className="loadingContainer" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        )
      case 'success':
        return (
          <>
            <VaccinationCoverage list={detailsList.last7DaysVaccination} />
            <VaccinationByGender list={detailsList.vaccinationByGender} />
            <VaccinationByAge list={detailsList.vaccinationByAge} />
          </>
        )
      case 'failure':
        return (
          <div className="failure-view">
            <img
              className="failure-img"
              alt="failure view"
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            />
            <h1 className="failureheading">Something Went Wrong</h1>
          </div>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div className="mainContainer">
        <h1 className="mainheading">
          <img
            className="mainlogo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          />{' '}
          Co-WIN
        </h1>
        <h1 className="mainpara">CoWIN Vaccination in India</h1>
        {this.renderPage()}
      </div>
    )
  }
}

export default CowinDashboard
