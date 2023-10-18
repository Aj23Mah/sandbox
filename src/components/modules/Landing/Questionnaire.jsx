import React from "react";

const Questionnaire = () => {
  return (
    <div className="lg:p-20 p-5">
      <div class="flex flex-wrap bg-primary lg:p-20">
        <div class="w-full sm:w-1/2 pr-6">
          <div className="lg:text-4xl text-black font-semibold mb-6">
            Frequently Asked Questions
          </div>
          <div className="lg:text-2xl text-gray font-medium mb-6">
            If you don't see an answer to your question, you can send us an
            email from our contact form.
          </div>
        </div>
        <div class="w-full sm:w-1/2 pl-6">
          <div className="cursor-pointer text-gray">
            <details className="mb-2">
              <summary className="hover:text-primary-dark font-bold lg:text-base mb-4">
                How do i get my subscription receipt?
              </summary>
              <p className="pl-4 lg:text-base mb-4">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus. Cras
                mattis consectetur purus sit amet fermentum. Praesent commodo
                cursus magna, vel.
              </p>
            </details>
            <details className="mb-2">
              <summary className="hover:text-primary-dark font-bold lg:text-base mb-4">
                Are there any discounts for people in need?
              </summary>
              <p className="pl-4 lg:text-base mb-4">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus. Cras
                mattis consectetur purus sit amet fermentum. Praesent commodo
                cursus magna, vel.
              </p>
            </details>
            <details className="mb-2">
              <summary className="hover:text-primary-dark font-bold lg:text-base mb-4">
                Do you offer a free trial edit?
              </summary>
              <p className="pl-4 lg:text-base mb-4">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus. Cras
                mattis consectetur purus sit amet fermentum. Praesent commodo
                cursus magna, vel.
              </p>
            </details>
            <details className="mb-2">
              <summary className="hover:text-primary-dark font-bold lg:text-base mb-4">
                How do I reset my Account password?
              </summary>
              <p className="pl-4 lg:text-base mb-4">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus. Cras
                mattis consectetur purus sit amet fermentum. Praesent commodo
                cursus magna, vel.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
