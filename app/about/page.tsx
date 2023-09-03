import React from 'react';

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">More About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Since you've taken that extra click, I'd like to reward you by sharing some of my unique interests.
      </p>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <img src="your-image1.jpg" className="card-img-top" alt="Card Image 1" />
            <div className="card-body">
              <h5 className="card-title">Interest 1</h5>
              <p className="card-text">Description of your first interest goes here.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <img src="your-image2.jpg" className="card-img-top" alt="Card Image 2" />
            <div className="card-body">
              <h5 className="card-title">Interest 2</h5>
              <p className="card-text">Description of your second interest goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
