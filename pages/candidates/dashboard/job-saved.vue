<template>
  <section class="section-box mt-120">
    <div class="container">
      <div class="row">
        <MenuCandidates />

        <div class="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
          <div class="content-single">
            <h3 class="mt-0 color-brand-1 mb-30">Saved Jobs</h3>
            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <div class="card-grid-2 hover-up">
                  <div class="card-grid-2-image-left">
                    <span class="flash"></span>
                    <div class="image-box">
                      <img
                        src="/assets/imgs/brands/brand-1.png"
                        alt="joblist"
                      />
                    </div>
                    <div class="right-info">
                      <a class="name-job" href=""
                        >LinkedIn</a
                      ><span class="location-small">New York, US</span>
                    </div>
                  </div>
                  <div class="card-block-info">
                    <h6>
                      <a href="">UI / UX Designer fulltime</a>
                    </h6>
                    <div class="mt-5">
                      <span class="card-briefcase">Fulltime</span
                      ><span class="card-time">4<span> minutes ago</span></span>
                    </div>
                    <p class="font-sm color-text-paragraph mt-15">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Recusandae architecto eveniet, dolor quo repellendus
                      pariatur
                    </p>
                    <div class="mt-30">
                      <a class="btn btn-grey-small mr-5" href=""
                        >Adobe XD</a
                      ><a class="btn btn-grey-small mr-5" href=""
                        >Figma</a
                      ><a class="btn btn-grey-small mr-5" href=""
                        >Photoshop</a
                      >
                    </div>
                    <div class="card-2-bottom mt-30">
                      <div class="row">
                        <div class="col-lg-7 col-7">
                          <span class="card-text-price">$500</span
                          ><span class="text-muted">/Hour</span>
                        </div>
                        <div class="col-lg-5 col-5 text-end">
                          <div
                            class="btn btn-apply-now"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalApplyJobForm"
                          >
                            Apply now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="card-grid-2 hover-up">
                  <div class="card-grid-2-image-left">
                    <span class="flash"></span>
                    <div class="image-box">
                      <img
                        src="/assets/imgs/brands/brand-2.png"
                        alt="joblist"
                      />
                    </div>
                    <div class="right-info">
                      <a class="name-job" href=""
                        >Adobe Ilustrator</a
                      ><span class="location-small">New York, US</span>
                    </div>
                  </div>
                  <div class="card-block-info">
                    <h6><a href="">Full Stack Engineer</a></h6>
                    <div class="mt-5">
                      <span class="card-briefcase">Part time</span
                      ><span class="card-time">5<span> minutes ago</span></span>
                    </div>
                    <p class="font-sm color-text-paragraph mt-15">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Recusandae architecto eveniet, dolor quo repellendus
                      pariatur.
                    </p>
                    <div class="mt-30">
                      <a class="btn btn-grey-small mr-5" href=""
                        >React</a
                      ><a class="btn btn-grey-small mr-5" href=""
                        >NodeJS</a
                      >
                    </div>
                    <div class="card-2-bottom mt-30">
                      <div class="row">
                        <div class="col-lg-7 col-7">
                          <span class="card-text-price">$800</span
                          ><span class="text-muted">/Hour</span>
                        </div>
                        <div class="col-lg-5 col-5 text-end">
                          <div
                            class="btn btn-apply-now"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalApplyJobForm"
                          >
                            Apply now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="paginations">
              <ul class="pager">
                <li>
                  <a class="pager-prev" href="#"
                    ><i class="fas fa-arrow-left"></i
                  ></a>
                </li>
                <li><a class="pager-number" href="#">1</a></li>
                <li><a class="pager-number" href="#">2</a></li>
                <li><a class="pager-number active" href="#">3</a></li>
                <li><a class="pager-number" href="#">4</a></li>
                <li>
                  <a class="pager-next" href="#"
                    ><i class="fas fa-arrow-right"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MenuCandidates from "~/components/Jobs/Grid/Candidates/dashboard/MenuCandidates.vue";
</script>
