<template>
  <div class="box-filters-job">
    <div class="row">
      <div class="col-xl-6 col-lg-5">
        <span class="text-small text-showing"
          >Showing <strong>41-60 </strong>of <strong>944 </strong>jobs</span
        >
      </div>
      <div class="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
        <div class="display-flex2">
          <div class="box-border mr-10">
            <span class="text-sortby">Show:</span>
            <div class="dropdown dropdown-sort">
              <button
                class="btn dropdown-toggle"
                id="dropdownSort"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-display="static"
              >
                <span>12</span><i class="fi-rr-angle-small-down"></i>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-light"
                aria-labelledby="dropdownSort"
              >
                <li>
                  <a class="dropdown-item active" href="#">10</a>
                </li>
                <li><a class="dropdown-item" href="#">12</a></li>
                <li><a class="dropdown-item" href="#">20</a></li>
              </ul>
            </div>
          </div>
          <div class="box-border">
            <span class="text-sortby">Sort by:</span>
            <div class="dropdown dropdown-sort">
              <button
                class="btn dropdown-toggle"
                id="dropdownSort2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-display="static"
              >
                <span>Newest Post</span><i class="fi-rr-angle-small-down"></i>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-light"
                aria-labelledby="dropdownSort2"
              >
                <li>
                  <a class="dropdown-item active" href="#">Newest Post</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Oldest Post</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Rating Post</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
  