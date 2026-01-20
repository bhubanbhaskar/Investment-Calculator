export default function UserInput({ userInput, onChange, errors }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) =>
              onChange("initialInvestment", e.target.value)
            }
          />
          {errors?.initialInvestment && (
            <span className="error">
              {errors.initialInvestment}
            </span>
          )}
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) =>
              onChange("annualInvestment", e.target.value)
            }
          />
          {errors?.annualInvestment && (
            <span className="error">
              {errors.annualInvestment}
            </span>
          )}
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return (%)</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) =>
              onChange("expectedReturn", e.target.value)
            }
          />
          {errors?.expectedReturn && (
            <span className="error">
              {errors.expectedReturn}
            </span>
          )}
        </p>

        <p>
          <label>Duration (Years)</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) =>
              onChange("duration", e.target.value)
            }
          />
          {errors?.duration && (
            <span className="error">
              {errors.duration}
            </span>
          )}
        </p>
      </div>
    </section>
  );
}
