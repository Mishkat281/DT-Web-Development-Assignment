
      const sidebar = document.getElementById("sidebar");
      const toggleBtn = document.getElementById("toggleBtn");
      const stepNumber = document.getElementById("stepNumber");

      toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("expanded");
      });

      stepNumber.addEventListener("click", () => {
        sidebar.classList.toggle("expanded");
      });


  
      fetch('./data.json')
        .then(res => res.json())
        .then(data => {

          const section1 = document.getElementById('section1-dynamic');
          const section2 = document.getElementById('section2-dynamic');
          const section3 = document.getElementById('section3-dynamic');
          const section4 = document.getElementById('section4-dynamic');

          data.assets.forEach(asset => {

            /* SECTION 1 : VIDEO */
            if (asset.asset_content_type === 'video') {
              section1.innerHTML = `
          <div class="Section1-card">
            <p class="section1-para1">${asset.asset_title}</p>
            <img class="Group1735" src="images/Group 1735.png" alt="Icon" />
          </div>

          <p class="section1-para2">
            <b>Description:</b> ${asset.asset_description}
          </p>

          <iframe 
            src="${asset.asset_content}" 
            width="100%" 
            height="300" 
            frameborder="0" 
            allowfullscreen>
          </iframe>
        `;
            }

            /* SECTION 2 : THREADBUILD */
            if (asset.asset_content_type === 'threadbuilder') {
              section2.innerHTML = `
          <div class="Section2-card">
            <p>${asset.asset_title}</p>
            <img src="images/Group 1735.png" alt="Icon" />
          </div>

          <div class="section2-content">
            <p class="description-text">
              <b>Description:</b> ${asset.asset_description}
            </p>

            <div class="thread-dropdown">
              <div class="thread-header" onclick="toggleThread(this)">
                <span><img src="images/Vector.png" alt="" /></span>
                <span class="thread-title">Thread A</span>
              </div>

              <div class="thread-body">
                <div class="sub-threads-row">
                  <div class="sub1">
                    <p>Sub thread 1</p>
                    <input type="text" placeholder="Enter Text Here" />
                  </div>

                  <div class="sub2">
                    <p>Sub Interpretation 1</p>
                    <input type="text" placeholder="Enter Text Here" />
                  </div>
                </div>

                <div class="icon-row">
                  <div class="logo">
                    <img src="images/bulb.png" />
                    <img src="images/msg.png" />
                    <img src="images/question mark.png" />
                    <img src="images/plant.png" />
                  </div>

                  <div class="category-row">
                    <div class="category">
                      <p>Select category <img src="images/arrow down.png" /></p>
                    </div>
                    <div class="process">
                      <p>Select process <img src="images/arrow down.png" /></p>
                    </div>
                  </div>
                </div>

                <div class="sub-thread">
                  <button>
                    <img src="images/plus.png" /> Sub thread
                  </button>
                </div>

                <div class="summary">
                  <p>Summary for Thread A</p>
                  <input type="text" placeholder="Enter Text Here" />
                </div>
              </div>
            </div>
          </div>
        `;
            }

            /* SECTION 3 : ARTICLE */
            if (asset.asset_title === 'Structure your Pointers') {
              section3.innerHTML = `
          <div class="Section3-card">
            <p>${asset.asset_title}</p>
            <img src="images/Group 1735.png" alt="Icon" />
          </div>

          <div class="section3-content">
            <p class="description-text">
              <b>Description:</b> ${asset.asset_description}
            </p>
          </div>

          <div class="section3-title">
            <p>Title</p>
            <input type="text" placeholder="Enter title here" />
          </div>

          <div class="section3-content">
            <p>Content</p>

            <div class="menu-bar">
              <button>File</button>
              <button>Edit</button>
              <button>View</button>
              <button>Insert</button>
              <button>Format</button>
              <button>Tools</button>
              <button>Table</button>
              <button>Help</button>
            </div>

            <div class="style-icons">
              <button><img src="images/arrow-curve-left-right.png" /></button>
              <button><img src="images/arrow-curve-left-down.png" /></button>
              <button><img src="images/arrow-expand-02.png" /></button>
            </div>

            <textarea placeholder="Write your article here..."></textarea>
          </div>
        `;
            }

            /* SECTION 4 : 4SA METHOD */
            if (asset.asset_title === '4SA Method') {
              section4.innerHTML = `
          <div class="Section4-card">
            <p>${asset.asset_title}</p>
            <img src="images/Group 1735.png">
          </div>

          <div class="section4-content">
            <p><b>Description:</b> ${asset.asset_description}</p>
          </div>

          <div class="section4-main">
            <div class="section-header">
              <img src="images/Vector.png">
              <p>Introduction</p>
            </div>

            <div class="section-body">
              <p>The 4SA Method, How to bring an idea into progress?</p>
              <a href="${asset.asset_content}" target="_blank">See More</a>
            </div>

            <div class="section-header light">
              <img src="images/Vector.png">
              <p>Thread A</p>
            </div>

            <div class="section-body">
              <p>
                How are you going to develop your strategy?
                Which method are you going to use?
              </p>
              <a href="${asset.asset_content}" target="_blank">See More</a>
            </div>

            <div class="section4-example">
              <h4>Example 1</h4>
              <p>You have a concept, How will you put it into progress?</p>
            </div>
          </div>
        `;
            }

          });
        });


   
