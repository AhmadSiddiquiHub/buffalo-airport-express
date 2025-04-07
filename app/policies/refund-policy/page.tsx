const RefundPolicy = () => {
  return (
    <div className="terms-wrapper">
      <div className="terms-hero">
        <h1 className="terms-hero-title">Refund Policy</h1>
      </div>

      <section className="terms-content">
        <div className="terms-inner">
          <h2 className="main-title">Refund Policy</h2>

          <div className="terms-block">
            <p>
              At Airport Express ("Company," "we," "our," or "us"), we strive to
              provide reliable and efficient transportation services. However,
              we understand that cancellations may be necessary. This Refund
              Policy outlines the conditions under which refunds are issued for
              canceled bookings.
            </p>
          </div>

          <div className="terms-block">
            <h3>1. Cancellation and Refund Conditions</h3>

            <section>
              <h4>1.1 Cancellations Made More Than 3 Hours Before Pickup</h4>
              <ul>
                <li>
                  Customers who cancel their reservation more than 3 hours
                  before the scheduled pickup time will receive an 80% refund.
                </li>
              </ul>
            </section>

            <section>
              <h4>1.2 Cancellations Made Within 3 Hours of Pickup</h4>
              <ul>
                <li>No refund will be issued.</li>
              </ul>
            </section>

            <section>
              <h4>1.3 No-Shows</h4>
              <ul>
                <li>
                  If a customer fails to appear at the designated pickup
                  location without prior cancellation in writing, no refund will
                  be issued.
                </li>
              </ul>
            </section>

            <section>
              <h4>1.4 If Required to Reschedule</h4>
              <ul>
                <li>
                  If you are required to reschedule and provide more than 3
                  hours' notice, there is no additional charge for the new
                  scheduled time.
                </li>
              </ul>
            </section>

            <section>
              <h4>1.5 Service Delays or Cancellations by Airport Express</h4>
              <ul>
                <li>
                  In the rare event that we must cancel a scheduled service due
                  to unforeseen circumstances, customers will receive a full
                  refund or the option to reschedule at no additional cost.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
