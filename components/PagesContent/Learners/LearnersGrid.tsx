import S from './LearnersGridStyle'
import PeriodButtons from "./PeriodButtons";
import  Bell from '../../Icons/Bell'
import Border from '../../Icons/Border'
import User from '../../Icons/User'

export default function LearnersGrid() {
  return (
    <S.Content>
      <S.Search placeholder="Поиск клиента"/>
      <S.NotificationAndProfile>
        <Bell/>
        <Border/>
        <p>Alexander Gerasimuk</p>
        <User/>
      </S.NotificationAndProfile>
      <S.ControlPeriodYandex>
        <PeriodButtons/>
      </S.ControlPeriodYandex>
      <S.ControlPeriodPaypal>
        <PeriodButtons/>
      </S.ControlPeriodPaypal>
      <S.YandexIncome>
        YandexIncome
      </S.YandexIncome>
      <S.PayPalIncome>
        PayPalIncome
      </S.PayPalIncome>
      <S.NumberOfParticipants>
        NumberOfParticipants
      </S.NumberOfParticipants>
      <S.Debtors>
        Debtors
      </S.Debtors>
      <S.NoAboniments>
        NoAboniments
      </S.NoAboniments>
      <S.TrainersNum>
        TrainersNum
      </S.TrainersNum>
      <S.PayToday>
        PayToday
      </S.PayToday>
      <S.PayTomorrow>
        Pay Tomorrow
      </S.PayTomorrow>
      <S.GetTrainersSalaryInfo>
        GetTrainersSalaryInfo
      </S.GetTrainersSalaryInfo>
    </S.Content>
  )
}