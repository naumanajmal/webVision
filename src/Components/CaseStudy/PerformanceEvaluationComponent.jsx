import React from 'react';

const PerformanceEvaluationComponent = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Title goes here</h1>
          <p className="mb-4">
            Evaluate your performance with precision after each question using
            our intuitive Performance Evaluation Phase.
          </p>
          <p className="mb-4">
            Rate the difficulty level of the question on a scale of 1 to 5 stars and
            choose the option that best represents your progress. From
            reviewing the question to acing all the test cases, we've got you
            covered!
          </p>
          <p className="mb-4">
            Evaluate your performance with precision after each question using
            our intuitive Performance Evaluation Phase.
          </p>
          <p className="mb-4">
            Rate the difficulty level of the question on a scale of 1 to 5 stars and
            choose the option that best represents your progress. From
            reviewing the question to acing all the test cases, we've got you
            covered!
          </p>
          <p className="mb-4">
            Evaluate your performance with precision after each question using
            our intuitive Performance Evaluation Phase.
          </p>
          <p className="mb-4">
            Rate the difficulty level of the question on a scale of 1 to 5 stars and
            choose the option that best represents your progress. From
            reviewing the question to acing all the test cases, we've got you
            covered!
          </p>
          <button className="bg-blue text-white py-2 px-4 rounded  transition duration-300">
            Contact Now
          </button>
        </div>
        <div className="md:w-1/2 space-y-4">
          {[...Array(5)].map((_, index) => (
            <p key={index} className="text-sm">
              Evaluate your performance with precision after each question using our intuitive
              Performance Evaluation Phase.
              Rate the difficulty level of the question on a scale of 1 to 5 stars and choose the option
              that best represents your progress. From reviewing the question to acing all the test
              cases, we've got you covered!
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceEvaluationComponent;