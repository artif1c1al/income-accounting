import styled from "@emotion/styled";

const Content = styled.div`
  display: grid;
  height: 100vh;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto repeat(4, 1fr);
  //grid-template-rows: auto;
  grid-template-areas: 
    "search search . notificationAndProfile"
    "control-left . control-right ."
    "yandex-income yandex-income paypal-income paypal-income"
    "yandex-income yandex-income paypal-income paypal-income"
    "number-of-participants debtors no-aboniments trainers-num"
    "number-of-participants pay-today pay-tomorrow get-trainers-salary-info"
`

const Search = styled.input`
  grid-area: search;
  padding: 10px 20px;
  max-width: 500px;
  border: none;
  border-radius: 100px;
`

const NotificationAndProfile = styled.div`
  grid-area: notificationAndProfile;
  justify-self: end;
  display: flex;
  align-items: center;  
  * + * {
    margin-left: 15px;
  }
`

const ControlPeriodYandex = styled.div`
  grid-area: control-left;
`

const ControlPeriodPaypal = styled.div`
  grid-area: control-right;
`

const YandexIncome = styled.div`
  grid-area: yandex-income;
  background: #fff;
`

const PayPalIncome = styled.div`
  grid-area: paypal-income;
  background: #fff;
`

const NumberOfParticipants = styled.div`
  grid-area: number-of-participants;
  background: #fff;
`

const Debtors = styled.div`
  grid-area: debtors;
  background: #fff;
`

const NoAboniments = styled.div`
  grid-area: no-aboniments;
  background: #fff;
`

const TrainersNum = styled.div`
  grid-area: trainers-num;
  background: #fff;
`

const PayToday = styled.div`
  grid-area: pay-today;
  background: #fff;
`

const PayTomorrow = styled.div`
  grid-area: pay-tomorrow;
  background: #fff;
`
const GetTrainersSalaryInfo = styled.div`
  grid-area: get-trainers-salary-info;
  background: #2E71F3;
  color: white;
`


export default {
  Search,
  NotificationAndProfile,
  Content,
  ControlPeriodYandex,
  ControlPeriodPaypal,
  YandexIncome,
  PayPalIncome,
  NumberOfParticipants,
  Debtors,
  NoAboniments,
  TrainersNum,
  PayToday,
  PayTomorrow,
  GetTrainersSalaryInfo,
}