import React from 'react';
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb';
const RoadMap: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="hori-timeline" dir="ltr">
                <ul className="list-inline events">
                  <li className="list-inline-item event-list translate-y-14 translate-x-[7.5rem]">
                    <div className="px-4 border-2 border-black border-solid rounded-[20px] p-2">
                      <h5 className="lg:text-xl max-lg:text-lg max0sm:text-sm font-bold">
                        Detailed career Roadmap
                      </h5>
                      <p className="text-muted leading-5 text-[15px]">
                        The council aims to foster a culture of innovation and
                        exploration in the field of AI, driving research and
                        development initiatives across the country.
                      </p>
                    </div>
                    <TbTriangleFilled className="border-b-4 border-black border-solid text-5xl -translate-y-[11rem] translate-x-32" />
                  </li>
                  <li className="list-inline-item event-list -translate-y-56 translate-x-[1.8rem]">
                    <div className="px-4 border-2 border-black border-solid rounded-[20px] p-2">
                      <h5 className="lg:text-xl max-lg:text-lg max0sm:text-sm font-bold">
                        Detailed career Roadmap
                      </h5>
                      <p className="text-muted leading-5 text-[15px]">
                        The council aims to foster a culture of innovation and
                        exploration in the field of AI, driving research and
                        development initiatives across the country.
                      </p>
                    </div>
                    <TbTriangleInvertedFilled className="text-5xl border-t-4 border-black border-solid translate-x-28" />
                  </li>
                  <li className="list-inline-item event-list translate-y-14 -translate-x-[5.3rem]">
                    <div className="px-4 border-2 border-black border-solid rounded-[20px] p-2">
                      <h5 className="lg:text-xl max-lg:text-lg max0sm:text-sm font-bold">
                        Detailed career Roadmap
                      </h5>
                      <p className="text-muted leading-5 text-[15px]">
                        The council aims to foster a culture of innovation and
                        exploration in the field of AI, driving research and
                        development initiatives across the country.
                      </p>
                    </div>
                    <TbTriangleFilled className="border-b-4 border-black border-solid text-5xl -translate-y-[11rem] translate-x-32" />
                  </li>
                  <li className="list-inline-item event-list -translate-y-56 -translate-x-[11rem]">
                    <div className="px-4 border-2 border-black border-solid rounded-[20px] p-2">
                      <h5 className="lg:text-xl max-lg:text-lg max0sm:text-sm font-bold">
                        Detailed career Roadmap
                      </h5>
                      <p className="text-muted leading-5 text-[15px]">
                        The council aims to foster a culture of innovation and
                        exploration in the field of AI, driving research and
                        development initiatives across the country.
                      </p>
                    </div>
                    <TbTriangleInvertedFilled className="text-5xl border-t-4 border-black border-solid translate-x-32" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
