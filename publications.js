/* Minimal client-side publications renderer (no build step). */
(function () {
  const YEAR_BUCKET_CUTOFF = 2014; // 2014 and before

	  // Replace this list with your real publications.
	  /** @type {Array<{
	   *  id: string,
	   *  title: string,
	   *  authors: string,
	   *  year: number,
	   *  topics: string[],
	   *  thumb?: string,
	   *  video?: string,
	   *  videoAutoplay?: boolean,
	   *  selected?: boolean,
	   *  highlights?: string[],
	   *  venues?: Array<{
	   *    venue: string,
   *    venueUrl?: string,
   *    links?: Array<{ label: string, href: string }>
   *  }>,
   *  // Back-compat fields (optional)
   *  venue?: string,
   *  links?: { pdf?: string, doi?: string, code?: string, project?: string }
   * }>}
   */
  const publications = [
    {
      id: "zhang2026multi",
      title: "Multi-modality fusion: Illuminating the complexity of two-phase flow",
      authors: "Xiaojing Zhang, Sanghyeon Chang, Youngjoon Suh, Yoonjin Won",
      year: 2026,
      topics: [],
      selected: true,
      thumb: "https://ars.els-cdn.com/content/image/1-s2.0-S3050585226000029-gr1_lrg.jpg",
      venues: [
        {
          venue: "AI Thermal Fluids (Elsevier), 2026, 100028",
          links: [
            {
              label: "Paper",
              href: "https://www.sciencedirect.com/science/article/pii/S3050585226000029",
            },
          ],
        },
      ],
    },
	    {
	      id: "chang2026spatiotemporal",
	      title: "Spatiotemporal Learning in Power Modules: Wavelet-Enhanced Forecasting of Thermomechanical Degradation",
	      authors: "Sanghyeon Chang, Paul Paret, Sreekant Narumanchi, Yoonjin Won",
	      year: 2026,
	      topics: [],
	      selected: true,
	      video: "assets/publications/neurontree.mov",
	      videoAutoplay: true,
	      venues: [
	        {
	          venue: "IEEE Transactions on Components, Packaging and Manufacturing Technology, 2026",
	          links: [
	            {
              label: "Paper",
              href: "https://ieeexplore.ieee.org/abstract/document/11359243",
            },
          ],
        },
      ],
    },
    {
      id: "na2025bubble",
      title: "Bubble segmentation and heat flux estimation in nucleate boiling using a resource-efficient deep learning framework",
      authors: "UngJin Na, Bruno Pinheiro Serrao, JunYoung Seo, Youngjoon Suh, Juliana Pacheco Duarte, Yoonjin Won, HangJin Jo",
      year: 2025,
      topics: [],
      selected: true,
      thumb: "https://ars.els-cdn.com/content/image/1-s2.0-S2666546825002009-gr8_lrg.jpg",
      venues: [
        {
          venue: "Energy and AI (Elsevier), 2025, 100668",
          links: [
            {
              label: "Paper",
              href: "https://www.sciencedirect.com/science/article/pii/S2666546825002009",
            },
          ],
        },
      ],
    },
	    {
	      id: "chang2025eventflow",
	      title: "EventFlow: Real-Time Neuromorphic Event-Driven Classification of Two-Phase Boiling Flow Regimes",
	      authors: "Sanghyeon Chang, Srikar Arani, Nishant Sai Nuthalapati, Youngjoon Suh, Nicholas Choi, Siavash Khodakarami, Md Rakibul Hasan Roni, Nenad Miljkovic, Aparna Chandramowlishwaran, Yoonjin Won",
	      year: 2025,
	      topics: [],
	      selected: true,
	      thumb: "assets/publications/EventFlow2.gif",
	      venues: [
	        {
	          venue: "arXiv preprint (arXiv:2511.05467), 2025",
	          links: [{ label: "Paper", href: "https://arxiv.org/abs/2511.05467" }],
	        },
	      ],
	    },
    {
      id: "fu2025data",
      title: "Data-Driven Optical To Thermal Inference in Pool Boiling Using Generative Adversarial Networks",
      authors: "Qianxi Fu, Youngjoon Suh, Xiaojing Zhang, Yoonjin Won",
      year: 2025,
      topics: [],
      selected: true,
      thumb: "assets/publications/fu2025data.jpg",
      venues: [
        {
          venue: "arXiv preprint (arXiv:2505.00823), 2025",
          links: [{ label: "Paper", href: "https://arxiv.org/abs/2505.00823" }],
        },
      ],
    },
    {
      id: "chang2025predicting",
      title: "Predicting Thermomechanical Degradation in Bonded Interfaces Using Enhanced Image Processing and Deep Learning Techniques",
      authors: "Sanghyeon Chang, Paul Paret, Sreekant Narumanchi, Yoonjin Won",
      year: 2025,
      topics: [],
      selected: true,
      thumb: "assets/publications/chang2025predicting.png",
      venues: [
        {
          venue: "2025 24th IEEE ITherm, 2025, pp. 1-7",
          links: [
            {
              label: "Paper",
              href: "https://ieeexplore.ieee.org/abstract/document/11235675",
            },
          ],
        },
      ],
    },
	    {
	      id: "zhao2024dropletmask",
	      title: "DropletMask: Leveraging visual data for droplet impact analysis",
	      authors: "Chuanning Zhao, Youngjoon Suh, Yoonjin Won",
	      year: 2024,
	      topics: [],
	      selected: true,
	      thumb: "assets/publications/zhao2024dropletmask.jpg",
	      venues: [
	        {
	          venue: "Droplet, 2024, 3(4): e137",
	          links: [
	            { label: "Paper", href: "https://onlinelibrary.wiley.com/doi/full/10.1002/dro2.137" },
            { label: "Cover Art", href: "https://onlinelibrary.wiley.com/doi/abs/10.1002/dro2.154" },
          ],
        },
      ],
    },
    {
      id: "huang2024modeling",
      title: "Modeling Flow Boiling Utilizing Machine Learning Vision Data",
      authors: "Cho-Ning Huang, Sanghyeon Chang, Youngjoon Suh, Yoonjin Won, Chirag R Kharangate",
	      year: 2024,
	      topics: [],
	      selected: true,
	      thumb: "assets/publications/huang2024modeling.jpg",
	      venues: [
	        {
	          venue: "2024 23rd IEEE ITherm, 2024, pp. 1-6",
	          links: [
	            {
              label: "Paper",
              href: "https://www.sciencedirect.com/science/article/pii/S0301932224002052",
            },
          ],
        },
      ],
    },
    {
      id: "farahani2024predictive",
      title: "Predictive machine learning models for lidar sensor reliability in autonomous vehicles",
      authors: "Saba A Farahani, Jae Yun Lee, Hunjae Kim, Yoonjin Won",
      year: 2024,
      topics: [],
      selected: true,
      thumb: "assets/publications/far2024car.png",
      venues: [
        {
          venue: "International Electronic Packaging Technical Conference and Exhibition (ASME), 2024, 88469: V001T07A001",
          links: [
            {
              label: "Paper",
              href: "https://asmedigitalcollection.asme.org/InterPACK/proceedings-abstract/InterPACK2024/1209189",
            },
          ],
        },
      ],
    },
    {
      id: "chen2024report",
      title: "Report on the Tenth US-Japan Joint Seminar on Nanoscale Transport Phenomena",
      authors:
        "Renkun Chen, Chuanhua Duan, Takuma Hori, Wei-Lun Hsu, Yongjie Hu, Takafumi Ishibe, Gota Kikugawa, Yaerim Lee, Amy Marconnet, Austin J Minnich, and others",
	      year: 2024,
	      topics: [],
	      selected: true,
	      thumb: "assets/publications/chen2024report.jpeg",
	      venues: [
	        {
	          venue: "Nanoscale and Microscale Thermophysical Engineering (Taylor & Francis), 2024, 28(4): 176-193",
	          links: [
	            {
              label: "Paper",
              href: "https://www.tandfonline.com/doi/abs/10.1080/15567265.2024.2439788",
            },
          ],
        },
      ],
    },
	    {
	      id: "lu2024rapid",
	      title: "Rapid identification of boiling crisis with event-based visual streaming analysis",
	      authors: "Dale Lu, Youngjoon Suh, Yoonjin Won",
	      year: 2024,
	      topics: [],
	      selected: true,
	      video: "assets/publications/EventPool.mov",
	      videoAutoplay: true,
	      venues: [
	        {
	          venue: "Applied Thermal Engineering (Pergamon), 2024, 239: 122004",
	          links: [
	            {
              label: "Paper",
              href: "https://www.sciencedirect.com/science/article/abs/pii/S1359431123020331",
            },
          ],
        },
      ],
    },
    {
      id: "zhao2024data",
      title: "A data-driven framework for forecasting transient vehicle thermal performances",
      authors: "Chuanning Zhao, Changsu Kim, Yoonjin Won",
      year: 2024,
      topics: [],
      selected: true,
      thumb: "https://www.tandfonline.com/action/showCoverImage?doi=10.1080/unhb20.v085.i05",
      venues: [
        {
          venue: "Numerical Heat Transfer, Part B: Fundamentals (Taylor & Francis), 2024, 85(5): 485-499",
          links: [
            {
              label: "Paper",
              href: "https://www.tandfonline.com/doi/full/10.1080/10407790.2023.2241633",
            },
          ],
        },
      ],
    },
    {
      id: "suh2024vision",
      title: "VISION-iT: A framework for digitizing bubbles and droplets",
      authors:
        "Youngjoon Suh, Sanghyeon Chang, Peter Simadiris, Tiffany B Inouye, Muhammad Jahidul Hoque, Siavash Khodakarami, Chirag Kharangate, Nenad Miljkovic, Yoonjin Won",
      year: 2024,
      topics: [],
      selected: true,
      thumb: "https://ars.els-cdn.com/content/image/1-s2.0-S2666546823000812-ga1_lrg.jpg",
      venues: [
        {
          venue: "Energy and AI (Elsevier), 2024, 15: 100309",
          links: [
            {
	              label: "Paper",
	              href: "https://www.sciencedirect.com/science/article/pii/S2666546823000812",
	            },
	          ],
	        },
	      ],
	    },
    {
      id: "suh2024recent",
      title: "Recent progress of artificial intelligence for liquid-vapor phase change heat transfer",
      authors: "Youngjoon Suh, Aparna Chandramowlishwaran, Yoonjin Won",
      year: 2024,
      topics: [],
      selected: true,
      thumb:
        "https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41524-024-01223-8/MediaObjects/41524_2024_1223_Fig2_HTML.png",
      venues: [
        {
          venue: "npj Computational Materials, 2024, 10(1): 65",
          links: [
            {
              label: "Paper",
              href: "https://www.nature.com/articles/s41524-024-01223-8",
            },
          ],
        },
      ],
    },
	    {
	      id: "kim2024effects",
	      title: "Effects of eccentricity in tube--pod arrangements on hyperloop aerodynamics",
	      authors: "Jihoon Kim, Changyoung Lee, Thi Thanh Giang Le, Dokyun Kim, Yoonjin Won, Minki Cho, Jaiyoung Ryu",
	      year: 2024,
	      topics: [],
	      selected: true,
	      thumb: "https://ars.els-cdn.com/content/image/1-s2.0-S0020740324005472-ga1_lrg.jpg",
	      venues: [
	        {
	          venue: "International Journal of Mechanical Sciences (Pergamon), 2024, 279: 109505",
	          links: [
	            {
	              label: "Paper",
	              href: "https://www.sciencedirect.com/science/article/pii/S0020740324005472",
	            },
	          ],
	        },
	      ],
	    },
    {
      id: "montazeri2023interfacial",
      title: "Interfacial Features Govern Nanoscale Jumping Droplets",
      authors: "Kimia Montazeri, Penghui Cao, Yoonjin Won",
      year: 2023,
      topics: [],
      selected: true,
      thumb: "https://pubs.acs.org/cms/10.1021/acs.langmuir.2c03313/asset/images/medium/la2c03313_0009.gif",
      venues: [
        {
          venue: "Langmuir (ACS), 2023, 39(12): 4317-4325",
          links: [{ label: "Paper", href: "https://pubs.acs.org/doi/10.1021/acs.langmuir.2c03313" }],
        },
      ],
    },
	    {
	      id: "hassan2023bubbleml",
	      title: "BubbleML: A multiphase multiphysics dataset and benchmarks for machine learning",
	      authors:
	        "Sheikh Md Shakeel Hassan, Arthur Feeney, Akash Dhruv, Jihoon Kim, Youngjoon Suh, Jaiyoung Ryu, Yoonjin Won, Aparna Chandramowlishwaran",
	      year: 2023,
	      topics: [],
	      selected: true,
	      thumb: "assets/publications/hassan2023bubbleml.gif",
	      venues: [
	        {
	          venue: "Advances in Neural Information Processing Systems, 2023, 36: 418-449",
	        },
        {
          venue: "arXiv preprint (arXiv:2307.14623), 2023",
          links: [{ label: "Paper", href: "https://arxiv.org/abs/2307.14623" }],
        },
      ],
    },
    {
      id: "khodakarami2023intelligent",
      title: "An intelligent strategy for phase change heat and mass transfer: Application of machine learning",
      authors: "Siavash Khodakarami, Youngjoon Suh, Yoonjin Won, Nenad Miljkovic",
      year: 2023,
      topics: [],
      selected: true,
      thumb: "assets/publications/khodakarami2023intelligent.svg",
      venues: [
        {
          venue: "Advances in Heat Transfer (Elsevier), 2023, 56: 113-168",
        },
      ],
    },
    {
      id: "chang2023bubblemask",
      title: "BubbleMask: Autonomous visualization of digital flow bubbles for predicting critical heat flux",
      authors:
        "Sanghyeon Chang, Youngjoon Suh, Chinmay Shingote, Cho-Ning Huang, Issam Mudawar, Chirag Kharangate, Yoonjin Won",
      year: 2023,
      topics: [],
      selected: true,
      thumb: "https://ars.els-cdn.com/content/image/1-s2.0-S0017931023008013-ga1_lrg.jpg",
      venues: [
        {
          venue: "International Journal of Heat and Mass Transfer (Pergamon), 2023, 217: 124656",
          links: [
            {
	              label: "Paper",
	              href: "https://www.sciencedirect.com/science/article/abs/pii/S0017931023008013",
	            },
	          ],
	        },
	      ],
	    },
    {
      id: "park2023machine",
      title: "Machine learning analysis of autonomous vehicle sensors under extreme conditions in Alaska",
      authors: "Jewoo Park, Nhi V Quach, Yonghwi Kim, Ruey-Hwa Cheng, Michal Jenco, Chenxi Yin, Alex K Lee, Yoonjin Won",
      year: 2023,
      topics: [],
      selected: true,
      thumb: "assets/publications/quach2022machine.png",
      venues: [
        {
          venue: "Journal of Electronic Packaging (ASME), 2023, 145(4): 044501",
        },
      ],
    },
    {
      id: "won2023systems",
      title: "Systems and Methods for Smart Boiling Control",
      authors: "Yoonjin Won, Youngjoon Suh, Ramin Bostanabad",
      year: 2023,
      topics: [],
      selected: true,
      thumb: "https://oxiwear.com/wp-content/uploads/2021/05/USPTO-logo-RGB-stacked-1200px.png",
      venues: [
        {
          venue: "US Patent App. 18/246,825 (Nov 23, 2023)",
        },
      ],
    },
	    {
	      id: "pham2023grain",
	      title:
	        "Grain Crystallinity, Anisotropy, and Boundaries Govern Microscale Hydrodynamic Transport in Semicrystalline Porous Media",
	      authors: "Quang N Pham, Michael T Barako, Yoonjin Won",
	      year: 2023,
	      topics: [],
	      selected: true,
	      thumb: "assets/publications/pham2023grain.jpg",
	      venues: [
	        {
	          venue: "Langmuir (ACS), 2023, 40(1): 39-51",
		          links: [
		            {
	              label: "Paper",
	              href: "https://pubs.acs.org/doi/10.1021/acs.langmuir.3c01276",
	            },
	            {
	              label: "Cover Art",
	              href: "https://pubs.acs.org/doi/10.1021/acs.langmuir.3c01276",
	            },
	          ],
	        },
	      ],
	    },
	    {
	      id: "khodakarami2022machine",
	      title: "Machine learning enabled condensation heat transfer measurement",
	      authors: "Siavash Khodakarami, Kazi Fazle Rabbi, Youngjoon Suh, Yoonjin Won, Nenad Miljkovic",
	      year: 2022,
	      topics: [],
	      selected: true,
	      thumb: "https://ars.els-cdn.com/content/image/1-s2.0-S0017931022004896-ga1_lrg.jpg",
	      venues: [
	        {
	          venue: "International Journal of Heat and Mass Transfer, 2022, 194: 123016",
	          links: [
	            {
              label: "Paper",
              href: "https://www.sciencedirect.com/science/article/abs/pii/S0017931022004896",
            },
          ],
        },
      ],
    },
    {
      id: "lee2022enhancing",
      title: "Enhancing recurrent droplet jumping phenomena on heterogeneous surface designs",
      authors: "Jonggyu Lee, Yoonjin Won",
      year: 2022,
      topics: [],
      selected: true,
      venues: [
        {
          venue: "Advanced Materials Interfaces, 2022, 9(22): 2200573",
          links: [
            {
              label: "Paper",
              href: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/admi.202200573",
            },
          ],
        },
      ],
    },
	    {
	      id: "lee2022computer",
	      title:
	        "Computer vision-assisted investigation of boiling heat transfer on segmented nanowires with vertical wettability",
	      authors: "Jonggyu Lee, Youngjoon Suh, Max Kuciej, Peter Simadiris, Michael T Barako, Yoonjin Won",
	      year: 2022,
	      topics: [],
	      selected: true,
	      video: "assets/publications/lee2022computer.mp4",
	      videoAutoplay: true,
	      venues: [
	        {
	          venue: "Nanoscale, 2022, 14(36): 13078-13089",
	          links: [
            {
              label: "Paper",
              href: "https://pubs.rsc.org/en/content/articlelanding/2022/nr/d2nr02447k",
            },
            {
              label: "Cover Art",
              href: "https://media.licdn.com/dms/image/v2/C4E22AQFH-srC8tYnIQ/feedshare-shrink_800/feedshare-shrink_800/0/1664071862269?e=1772064000&v=beta&t=wswfK4xJXGlNeq0UbBN0kW9TAxE1jnBQl_SLpWD7kEo",
            },
            {
              label: "Video",
              href: "https://youtu.be/GLsC6FM6viY?si=RSH8vG8_MQ44Y5f9",
            },
          ],
        },
      ],
    },
    {
      id: "lee2022enhanced",
      title: "Enhanced capillary wicking through hierarchically porous constructs derived from Bijel templates",
      authors: "Jonggyu Lee, Ali Mohraz, Yoonjin Won",
      year: 2022,
      topics: [],
      selected: true,
      thumb: "https://pubs.acs.org/cms/10.1021/acs.langmuir.2c01965/asset/images/medium/la2c01965_0008.gif",
      venues: [
        {
          venue: "Langmuir (ACS), 2022, 38(46): 14063-14072",
          links: [
            {
              label: "Paper",
              href: "https://pubs.acs.org/doi/10.1021/acs.langmuir.2c01965",
            },
          ],
        },
      ],
    },
	    {
	      id: "quach2022machine",
	      title: "Machine Learning Enables Autonomous Vehicles Under Extreme Environmental Conditions",
	      authors: "Nhi V Quach, Jewoo Park, Yonghwi Kim, Ruey-Hwa Cheng, Michal Jenco, Alex K Lee, Chenxi Yin, Yoonjin Won",
	      year: 2022,
	      topics: [],
	      selected: true,
	      thumb: "assets/publications/quach2022machine.png",
	      venues: [
	        {
	          venue: "International Electronic Packaging Technical Conference and Exhibition (ASME), 2022, 86557: V001T04A001",
	          links: [
	            {
              label: "Paper",
              href: "https://asmedigitalcollection.asme.org/InterPACK/proceedings-abstract/InterPACK2022/86557/V001T04A001/1153403",
            },
          ],
        },
      ],
    },
	    {
	      id: "suh2021deep",
	      title: "A deep learning perspective on dropwise condensation",
	      authors:
	        "Youngjoon Suh, Jonggyu Lee, Peter Simadiris, Xiao Yan, Soumyadip Sett, Longnan Li, Kazi Fazle Rabbi, Nenad Miljkovic, Yoonjin Won",
	      year: 2021,
	      topics: [],
	      selected: true,
	      thumb: "assets/publications/suh2021deep_cover.pdf",
	      venues: [
	        {
	          venue: "Advanced Science, 2021, 8(22): 2101794",
	          links: [
	            {
	              label: "Paper",
	              href: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/advs.202101794",
	            },
	            {
	              label: "Cover Art",
	              href: "assets/publications/suh2021deep_cover.pdf",
	            },
	          ],
	        },
	      ],
	    },
	    {
	      id: "suh2021boiling",
	      title: "Deep learning predicts boiling heat transfer",
	      authors: "Youngjoon Suh, Ramin Bostanabad, Yoonjin Won",
	      year: 2021,
	      topics: [],
	      selected: false,
	      video: "assets/publications/ColorBubble.mp4",
	      videoAutoplay: true,
	      venues: [
	        {
	          venue: "Scientific Reports, 2021, 11(1): 5622",
	          links: [
	            {
	              label: "Paper",
	              href: "https://www.nature.com/articles/s41598-021-85150-4",
	            },
	          ],
	        },
	      ],
	    },
	    {
	      id: "pham2020boiling",
	      title: "Boiling heat transfer with a well-ordered microporous architecture",
	      authors:
	        "Quang N Pham, Shiwei Zhang, Shuai Hao, Kimia Montazeri, Cheng-Hui Lin, Jonggyu Lee, Ali Mohraz, Yoonjin Won",
	      year: 2020,
	      topics: [],
	      selected: false,
	      thumb: "https://pubs.acs.org/cms/10.1021/acsami.0c01113/asset/images/medium/am0c01113_0006.gif",
	      venues: [
	        {
	          venue: "ACS Applied Materials & Interfaces, 2020, 12(16): 19174-19183",
	          links: [
	            {
	              label: "Paper",
	              href: "https://pubs.acs.org/doi/10.1021/acsami.0c01113",
	            },
	          ],
	        },
	      ],
	    },
    {
      id: "suh2020situ",
      title: "In situ investigation of particle clustering dynamics in colloidal assemblies using fluorescence microscopy",
      authors: "Youngjoon Suh, Hamsa Gowda, Yoonjin Won",
      year: 2020,
      topics: [],
      selected: false,
      thumb: "assets/publications/suh2020colloid_cover.pdf",
      venues: [
        {
          venue: "Journal of Colloid and Interface Science, 2020, 576: 195-202",
          links: [
            {
              label: "Paper",
              href: "https://www.sciencedirect.com/science/article/abs/pii/S0021979720305002",
            },
            {
              label: "Cover Art",
              href: "assets/publications/suh2020colloid_cover.pdf",
            },
          ],
        },
      ],
    },
    {
      id: "suh2019control",
      title: "The Control of Colloidal Grain Boundaries through Evaporative Vertical Self-Assembly",
      authors: "Youngjoon Suh, Quang Pham, Bowen Shao, Yoonjin Won",
      year: 2019,
      topics: [],
      selected: false,
      thumb: "assets/publications/suh2019control_cover.pdf",
      venues: [
        {
          venue: "Small, 2019, 15(12): 1804523",
          links: [
            {
	              label: "Paper",
	              href: "https://onlinelibrary.wiley.com/doi/abs/10.1002/smll.201804523",
	            },
	            {
	              label: "Cover Art",
	              href: "assets/publications/suh2019control_cover.pdf",
	            },
	          ],
	        },
	      ],
	    },
  ];

  const contentEl = document.getElementById("pub-content");
  const navEl = document.querySelector("#publications .pub-nav");
  const toggles = Array.from(document.querySelectorAll(".pub-toggle"));
  if (!contentEl || !navEl || toggles.length === 0) return;

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeTopic(topic) {
    return String(topic || "").trim();
  }

  function yearBucket(year) {
    return year <= YEAR_BUCKET_CUTOFF ? `${YEAR_BUCKET_CUTOFF} and before` : String(year);
  }

  function sortByYearDescThenTitle(a, b) {
    if (a.year !== b.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  }

  function renderLinks(links) {
    if (!links) return "";
    const items = [];
    if (links.project) items.push({ label: "project", href: links.project });
    if (links.pdf) items.push({ label: "pdf", href: links.pdf });
    if (links.doi) items.push({ label: "doi", href: links.doi });
    if (links.code) items.push({ label: "code", href: links.code });
    if (items.length === 0) return "";

    return `<span class="pub-links">${items
      .map(
        (i) =>
          `<a href="${escapeHtml(i.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(i.label)}</a>`
      )
      .join(" ")}</span>`;
  }

  function renderVenueLines(p) {
    if (p.venues && p.venues.length) {
      return p.venues
        .map((row) => {
          const venue = row.venueUrl
            ? `<a href="${escapeHtml(row.venueUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(row.venue)}</a>`
            : `<span class="pub-venue">${escapeHtml(row.venue)}</span>`;
          const links =
            row.links && row.links.length
              ? row.links
                  .map(
                    (l) =>
                      `<a href="${escapeHtml(l.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)}</a>`
                  )
                  .join(" / ")
              : "";

          return `<div class="pub-where">${venue}${links ? ` / ${links}` : ""}</div>`;
        })
        .join("");
    }

    // Back-compat: `venue` + `links`
    const venue = p.venue ? `<span class="pub-venue">${escapeHtml(p.venue)}</span>` : "";
    const links = renderLinks(p.links);
    if (!venue && !links) return "";
    return `<div class="pub-where">${venue}${links}</div>`;
  }

  function renderHighlights(p) {
    const hs = (p.highlights || []).map((h) => String(h || "").trim()).filter(Boolean);
    if (!hs.length) return "";
    return `<div class="pub-highlights">${hs.map((h) => `<div class="pub-highlight">${escapeHtml(h)}</div>`).join("")}</div>`;
  }

	  function autoThumbDataUri(p) {
    const title = String(p.title || "Publication").trim();
    const year = String(p.year || "").trim();
    const initials = title
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 3)
      .map((w) => w[0])
      .join("")
      .toUpperCase();

    // Simple, self-contained SVG "title card" thumbnail.
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffe1f0"/>
      <stop offset="1" stop-color="#ffd1ea"/>
    </linearGradient>
    <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000" flood-opacity="0.18"/>
    </filter>
  </defs>
  <rect width="640" height="400" fill="url(#g)"/>
  <circle cx="520" cy="86" r="120" fill="#e0218a" opacity="0.12"/>
  <circle cx="120" cy="340" r="170" fill="#e0218a" opacity="0.08"/>
  <rect x="42" y="52" width="556" height="296" rx="22" fill="#ffffff" filter="url(#s)"/>
  <text x="72" y="120" font-family="Roboto, Arial, Helvetica, sans-serif" font-weight="800" font-size="32" fill="#0f172a">
    ${escapeHtml(title).slice(0, 56)}
  </text>
  <text x="72" y="160" font-family="Roboto, Arial, Helvetica, sans-serif" font-weight="700" font-size="18" fill="#475569">
    ${escapeHtml(year ? `(${year})` : "")}
  </text>
  <rect x="72" y="210" width="140" height="44" rx="14" fill="#e0218a" opacity="0.92"/>
  <text x="142" y="239" text-anchor="middle" font-family="Roboto, Arial, Helvetica, sans-serif" font-weight="800" font-size="18" fill="#ffffff">
    ${escapeHtml(initials || "PAPER")}
  </text>
</svg>`;

	    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
	  }

	  function youtubeId(url) {
	    const raw = String(url || "");
	    const m1 = /^https?:\/\/youtu\.be\/([A-Za-z0-9_-]{6,})/.exec(raw);
	    const m2 =
	      /^https?:\/\/(?:www\.)?youtube\.com\/watch\?(?:.*&)?v=([A-Za-z0-9_-]{6,})/.exec(raw) ||
	      /^https?:\/\/(?:www\.)?youtube\.com\/shorts\/([A-Za-z0-9_-]{6,})/.exec(raw);
	    return (m1 && m1[1]) || (m2 && m2[1]) || "";
	  }

		  function youtubeThumbUrl(url) {
		    const id = youtubeId(url);
		    if (!id) return "";
		    return `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;
		  }

		  function canPlayVideoMime(mime) {
		    try {
		      const v = document.createElement("video");
		      const res = v.canPlayType(mime);
		      return res === "probably" || res === "maybe";
		    } catch {
		      return false;
		    }
		  }

		  function canPlayLocalVideo(url) {
		    const raw = String(url || "");
		    const ext = raw.split("?")[0].toLowerCase();
		    if (/\.(mp4)$/i.test(ext)) return canPlayVideoMime("video/mp4");
		    if (/\.(webm)$/i.test(ext)) return canPlayVideoMime("video/webm");
		    if (/\.(mov)$/i.test(ext)) return canPlayVideoMime("video/quicktime");
		    if (/\.(m4v)$/i.test(ext)) return canPlayVideoMime("video/x-m4v");
		    if (/\.(avi)$/i.test(ext)) return canPlayVideoMime("video/x-msvideo");
		    return false;
		  }

		  function youtubeEmbedUrl(url, opts) {
		    const id = youtubeId(url);
		    if (!id) return "";
		    const autoplay = opts && opts.autoplay ? "1" : "0";
		    const mute = opts && opts.autoplay ? "1" : "0";
		    const origin =
	      typeof location !== "undefined" && location && location.origin && location.origin !== "null"
	        ? `&origin=${encodeURIComponent(location.origin)}`
	        : "";
	    return `https://www.youtube.com/embed/${encodeURIComponent(
	      id
	    )}?rel=0&playsinline=1&autoplay=${autoplay}&mute=${mute}${origin}`;
	  }

		  function renderPubItem(p) {
		    const topics =
		      p.topics && p.topics.length
		        ? `<div class="pub-topics">${p.topics.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>`
		        : "";

		    // Thumbnail fallback chain:
		    // 1) `p.thumb` if provided, else `assets/publications/<id>.jpg`
		    // 2) `assets/publications/default.jpeg` (site-wide default)
		    // 3) auto-generated SVG card (always available)
		    const thumbCandidate = p.thumb ? String(p.thumb) : `assets/publications/${p.id}.jpg`;
		    const thumbIsPdf = /\.pdf(?:\?.*)?$/i.test(thumbCandidate);
		    const thumbDefault = "assets/publications/default.jpeg";
		    const thumbAlt1 =
		      !thumbIsPdf && /\.jpg$/i.test(thumbCandidate)
		        ? thumbCandidate.replace(/\.jpg$/i, ".png")
		        : !thumbIsPdf && /\.png$/i.test(thumbCandidate)
		          ? thumbCandidate.replace(/\.png$/i, ".jpg")
		          : "";
		    const thumbAlt2 =
		      !thumbIsPdf && /\.jpe?g$/i.test(thumbCandidate)
		        ? thumbCandidate.replace(/\.jpe?g$/i, ".png")
		        : !thumbIsPdf && /\.png$/i.test(thumbCandidate)
		          ? thumbCandidate.replace(/\.png$/i, ".jpeg")
		          : "";
		    const thumbSrc = escapeHtml(thumbCandidate);
		    const thumbImg = thumbIsPdf
		      ? `
		        <object class="pub-thumb-pdf" data="${thumbSrc}#page=1&view=FitH" type="application/pdf">
		          <img src="${escapeHtml(thumbDefault)}" alt="" loading="lazy" />
		        </object>
		      `
		      : `
		        <img
		          src="${thumbSrc}"
		          alt=""
		          loading="lazy"
		          onerror="if(!this.dataset.fallback && ${thumbAlt1 ? "true" : "false"}){this.dataset.fallback='alt1';this.src='${escapeHtml(thumbAlt1)}';}else if(this.dataset.fallback==='alt1' && ${thumbAlt2 ? "true" : "false"}){this.dataset.fallback='alt2';this.src='${escapeHtml(thumbAlt2)}';}else if(this.dataset.fallback!=='default'){this.dataset.fallback='default';this.src='${escapeHtml(
		            thumbDefault
		          )}';}else{this.onerror=null;this.src='${autoThumbDataUri(p)}';}"
		        />
		      `;

		    const isFile = typeof location !== "undefined" && location && location.protocol === "file:";
		    const videoUrl = p.video ? String(p.video) : "";
		    const isYouTubeVideo = Boolean(youtubeId(videoUrl));
		    const isLocalVideo = /\.(?:mp4|webm|mov|m4v|avi)(?:\?.*)?$/i.test(videoUrl);
		    const videoThumb = isYouTubeVideo ? youtubeThumbUrl(videoUrl) : "";
		    const embedUrl = !isFile && videoUrl && isYouTubeVideo
		      ? youtubeEmbedUrl(videoUrl, { autoplay: Boolean(p.videoAutoplay) })
		      : "";

		    if (videoUrl) {
		      if (isLocalVideo && !isYouTubeVideo) {
		        if (!canPlayLocalVideo(videoUrl)) {
		          return `
		            <article class="pub-item" id="${escapeHtml(p.id)}">
		              <div class="pub-thumb is-video-fallback">
		                <a class="pub-video-link" href="${escapeHtml(videoUrl)}" target="_blank" rel="noopener noreferrer">
		                  ${thumbImg}
		                  <span class="pub-video-play" aria-hidden="true"></span>
		                </a>
		              </div>
		              <div class="pub-main">
		                <div class="pub-title">${escapeHtml(p.title)}</div>
		                <div class="pub-authors">${escapeHtml(p.authors)}</div>
		                ${renderVenueLines(p)}
		                ${renderHighlights(p)}
		                ${topics}
		              </div>
		            </article>
		          `;
		        }

		        const autoplay = Boolean(p.videoAutoplay);
		        const muted = autoplay ? " muted" : "";
		        const loop = autoplay ? " loop" : "";
		        const autoplayAttr = autoplay ? " autoplay" : "";
		        const controls = autoplay ? "" : " controls";
		        return `
	          <article class="pub-item" id="${escapeHtml(p.id)}">
	            <div class="pub-thumb is-video is-video-file">
	              <video
	                src="${escapeHtml(videoUrl)}"
	                preload="metadata"
	                playsinline${muted}${loop}${autoplayAttr}${controls}
	              ></video>
	            </div>
	            <div class="pub-main">
	              <div class="pub-title">${escapeHtml(p.title)}</div>
	              <div class="pub-authors">${escapeHtml(p.authors)}</div>
	              ${renderVenueLines(p)}
	              ${renderHighlights(p)}
	              ${topics}
	            </div>
	          </article>
	        `;
	      }

	      // If opened from file://, YouTube embeds commonly fail. Fall back to a linked thumbnail.
	      if (isFile || !embedUrl) {
	        return `
	          <article class="pub-item" id="${escapeHtml(p.id)}">
	            <div class="pub-thumb is-video-fallback">
	              <a class="pub-video-link" href="${escapeHtml(videoUrl)}" target="_blank" rel="noopener noreferrer">
	                ${thumbImg}
	                <span class="pub-video-play" aria-hidden="true"></span>
	              </a>
	            </div>
	            <div class="pub-main">
	              <div class="pub-title">${escapeHtml(p.title)}</div>
	              <div class="pub-authors">${escapeHtml(p.authors)}</div>
	              ${renderVenueLines(p)}
	              ${renderHighlights(p)}
	              ${topics}
	            </div>
	          </article>
	        `;
	      }

	      // Autoplay: render the iframe directly.
	      if (p.videoAutoplay) {
	        return `
	          <article class="pub-item" id="${escapeHtml(p.id)}">
	            <div class="pub-thumb is-video">
	              <iframe
	                src="${escapeHtml(embedUrl)}"
	                title="${escapeHtml(p.title || "YouTube video")}"
	                loading="lazy"
	                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	                allowfullscreen
	              ></iframe>
	            </div>
	            <div class="pub-main">
	              <div class="pub-title">${escapeHtml(p.title)}</div>
	              <div class="pub-authors">${escapeHtml(p.authors)}</div>
	              ${renderVenueLines(p)}
	              ${renderHighlights(p)}
	              ${topics}
	            </div>
	          </article>
	        `;
	      }

	      // Click-to-play: render a thumbnail button; load iframe only after user interaction.
	      const posterSrc = escapeHtml(p.thumb || videoThumb || thumbCandidate);
	      return `
	        <article class="pub-item" id="${escapeHtml(p.id)}">
	          <div
	            class="pub-thumb is-video is-video-placeholder"
	            data-embed="${escapeHtml(youtubeEmbedUrl(videoUrl, { autoplay: true }))}"
	            data-title="${escapeHtml(p.title || "YouTube video")}"
	          >
	            <button class="pub-video-btn" type="button" aria-label="Play video">
	              <img src="${posterSrc}" alt="" loading="lazy" />
	              <span class="pub-video-play" aria-hidden="true"></span>
	            </button>
	          </div>
	          <div class="pub-main">
	            <div class="pub-title">${escapeHtml(p.title)}</div>
	            <div class="pub-authors">${escapeHtml(p.authors)}</div>
	            ${renderVenueLines(p)}
	            ${renderHighlights(p)}
	            ${topics}
	          </div>
	        </article>
	      `;
	    }
	    const thumb = `
	      <div class="pub-thumb">
	        ${thumbImg}
	      </div>
	    `;

    return `
      <article class="pub-item" id="${escapeHtml(p.id)}">
        ${thumb}
        <div class="pub-main">
          <div class="pub-title">${escapeHtml(p.title)}</div>
          <div class="pub-authors">${escapeHtml(p.authors)}</div>
          ${renderVenueLines(p)}
          ${renderHighlights(p)}
          ${topics}
        </div>
      </article>
    `;
  }

  function renderYearNav(yearLabels) {
    const links = yearLabels
      .map((label) => {
        const slug = label === `${YEAR_BUCKET_CUTOFF} and before` ? `y-${YEAR_BUCKET_CUTOFF}-before` : `y-${label}`;
        return `<a class="pub-nav-link" href="#${escapeHtml(slug)}">${escapeHtml(label)}</a>`;
      })
      .join("");

    navEl.innerHTML = `<div class="pub-nav-row"><span class="pub-nav-label">Year:</span>${links}</div>`;
  }

  // Topic nav removed.

		  function renderSelected() {
	    const items = publications.filter((p) => p.selected).sort(sortByYearDescThenTitle);

	    if (items.length === 0) {
	      navEl.innerHTML = "";
	      contentEl.innerHTML = `<p class="pub-empty">No selected publications yet.</p>`;
	      return;
	    }

	    const grouped = new Map();
	    for (const p of items) {
	      const key = yearBucket(p.year);
	      if (!grouped.has(key)) grouped.set(key, []);
	      grouped.get(key).push(p);
	    }

	    const years = Array.from(grouped.keys()).sort((a, b) => {
	      if (a === `${YEAR_BUCKET_CUTOFF} and before`) return 1;
	      if (b === `${YEAR_BUCKET_CUTOFF} and before`) return -1;
	      return Number(b) - Number(a);
	    });
	    renderYearNav(years);

		    contentEl.innerHTML = years
		      .map((label) => {
	        const slug = label === `${YEAR_BUCKET_CUTOFF} and before` ? `y-${YEAR_BUCKET_CUTOFF}-before` : `y-${label}`;
	        const sectionItems = grouped.get(label) || [];
	        return `
	          <section class="pub-section" id="${escapeHtml(slug)}">
	            <h3 class="pub-year">${escapeHtml(label)}</h3>
	            ${sectionItems.map(renderPubItem).join("")}
	          </section>
	        `;
		      })
		      .join("");
		  }

	  function renderByDate() {
    const items = publications.slice().sort(sortByYearDescThenTitle);
    const grouped = new Map();
    for (const p of items) {
      const key = yearBucket(p.year);
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key).push(p);
    }

    const years = Array.from(grouped.keys()).sort((a, b) => {
      if (a === `${YEAR_BUCKET_CUTOFF} and before`) return 1;
      if (b === `${YEAR_BUCKET_CUTOFF} and before`) return -1;
      return Number(b) - Number(a);
    });
    renderYearNav(years);

	    contentEl.innerHTML = years
	      .map((label) => {
        const slug = label === `${YEAR_BUCKET_CUTOFF} and before` ? `y-${YEAR_BUCKET_CUTOFF}-before` : `y-${label}`;
        const sectionItems = grouped.get(label) || [];
        return `
          <section class="pub-section" id="${escapeHtml(slug)}">
            <h3 class="pub-year">${escapeHtml(label)}</h3>
            ${sectionItems.map(renderPubItem).join("")}
          </section>
        `;
	      })
	      .join("");
	  }

	  // Delegate click-to-play for video placeholders.
	  contentEl.addEventListener("click", (e) => {
	    const btn = e.target && e.target.closest ? e.target.closest(".pub-video-btn") : null;
	    if (!btn) return;
	    const wrapper = btn.closest(".pub-thumb.is-video-placeholder");
	    if (!wrapper) return;
	    const embed = wrapper.getAttribute("data-embed") || "";
	    const title = wrapper.getAttribute("data-title") || "YouTube video";
	    if (!embed) return;
	    wrapper.classList.remove("is-video-placeholder");
	    wrapper.innerHTML = `
	      <iframe
	        src="${escapeHtml(embed)}"
	        title="${escapeHtml(title)}"
	        loading="lazy"
	        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	        allowfullscreen
	      ></iframe>
	    `;
	  });

  // Topic view removed.

  function setMode(mode) {
    for (const btn of toggles) {
      const active = btn.dataset.mode === mode;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    }

    if (mode === "date") renderByDate();
    else renderSelected();

    try {
      const url = new URL(window.location.href);
      url.searchParams.set("pub", mode);
      window.history.replaceState({}, "", url.toString());
    } catch {
      // ignore
    }
  }

  function initialMode() {
    try {
      const url = new URL(window.location.href);
      const mode = url.searchParams.get("pub");
      if (mode === "date" || mode === "selected") return mode;
    } catch {
      // ignore
    }
    return "selected";
  }

  for (const btn of toggles) {
    btn.addEventListener("click", () => setMode(btn.dataset.mode || "selected"));
  }

  setMode(initialMode());
})();
