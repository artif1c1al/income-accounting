import styled from "@emotion/styled";

const ButtonPeriod = styled.button`
  border: none;
  border-radius: 4px;
  background: #fff;
  padding: 10px;
`

const PeriodButtons = () => {
  return (
    <div className="period-buttons">
      <ButtonPeriod>
        День
      </ButtonPeriod>
      <ButtonPeriod>
        Неделя
      </ButtonPeriod>
      <ButtonPeriod>
        Mecяц
      </ButtonPeriod>
    </div>
  )
};

export default PeriodButtons