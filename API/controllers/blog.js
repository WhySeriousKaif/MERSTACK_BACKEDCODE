import { Blog } from "../Models/blogs.js";

export const createBlog = async (req, res) => {
  const { title, description, imgUrl } = req.body;

  await Blog.create({
    title,
    description,
    imgUrl,
    user: req.user,
  });

  res.status(201).json({
    success: true,
    message: "Blog added Successfully!",
  });
};
export const myBlog = async (req, res) => {
  const userid = req.user._id;

  const blogs = await Blog.find({ user: userid });

  res.status(200).json({
    success: true,
    blogs,
  });
};
export const updateBlog = async (req, res) => {
  const { title, description, imgUrl } = req.body;

  const id = req.params.id;

  const blog = await Blog.findById(id);

  if (!blog)
    return res.status(404).json({
      success: false,
      message: "Invalid ID",
    });

  (blog.title = title),
    (blog.description = description),
    (blog.imgUrl = imgUrl);

  await blog.save();

  res.json({
    success: true,
    message: "updating blog",
    blog,
  });
};
export const deleteBlog = async (req, res) => {
  const id = req.params.id;

  const blog = await Blog.findById(id);

  if (!blog)
    return res.status(404).json({
      success: false,
      message: "Invalid ID",
    });

  await blog.deleteOne();

  res.json({
    success: true,
    message: " blog deleted",
  });
};

export const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();

  if (!blogs)
    return res.status(404).json({
      success: false,
      message: "There is no blogs",
    });

  res.json({
    success: true,
    message: "All blogs",
    blogs: [
      {
        _id: "65438edea614187422e88444",
        title: "This is the beauty of Nature",
        description:
          "The beauty of nature lies in its serene landscapes, vibrant colors, diverse life, and its ability to inspire awe and tranquility.",
        imgUrl:
          "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
        user: "65438ddba614187422e88429",
        createdAt: "2023-11-02T11:58:22.172Z",
        __v: 0,
      },
      {
        _id: "65439a924db4a2f284ed36f0",
        title: "Infinity war",
        description:
          ' "Infinity War" is an epic Marvel movie where superheroes unite to battle the formidable Thanos, who seeks to collect all Infinity Stones and control the universe, leading to intense action and dramatic moments.',
        imgUrl:
          "https://m.media-amazon.com/images/I/81GfZasnt9L._AC_UF1000,1000_QL80_.jpg",
        user: "65438ddba614187422e88429",
        createdAt: "2023-11-02T12:48:18.658Z",
        __v: 0,
      },
      {
        _id: "65439b044db4a2f284ed36fd",
        title: "Doctor Strange",
        description:
          " Doctor Strange, portrayed by Benedict Cumberbatch, is a brilliant but arrogant surgeon who becomes a powerful sorcerer and protector of mystical dimensions in the Marvel Cinematic Universe.",
        imgUrl:
          "https://images.news18.com/ibnlive/uploads/2022/05/doctor-strange-2-review-1-165188958516x9.jpg",
        user: "65438ddba614187422e88429",
        createdAt: "2023-11-02T12:50:12.558Z",
        __v: 0,
      },
      {
        _id: "65439eca4db4a2f284ed374a",
        title: "Web Dev Mastery - 2:41 AM - 4/11/2023",
        description:
          "web dev mastery is all about web develpoment in intial face, after complete the whole web topics. The channel producing the c,c++,dataStructure & Alogrithms, java, python,php, c#.",
        imgUrl:
          "https://yt3.googleusercontent.com/ZI8m-t0tRUDI6BmbeJWWl2Pt5e5qRQ9s4_4v5ejSzbZyQ0iMXFCx0i70V0I64xKS5UnhydCIiBo=s176-c-k-c0x00ffffff-no-rj",
        user: "65439b984db4a2f284ed3740",
        createdAt: "2023-11-02T13:06:18.448Z",
        __v: 0,
      },
      {
        _id: "6545622984e2b30035f6f37f",
        title: "testing of title",
        description: "testing of description",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCssoOV6-yMdij-74nk0njlnxCbKgxtUW_ZAN1VRQpw&s",
        user: "65439b984db4a2f284ed3740",
        createdAt: "2023-11-03T21:12:09.017Z",
        __v: 0,
      },
      {
        _id: "65456a9100d758ce1c59951f",
        title: "This is added at vercel",
        description: "This blog is added the 3:17 AM , DAte - 11/4/2023",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCssoOV6-yMdij-74nk0njlnxCbKgxtUW_ZAN1VRQpw&s",
        user: "65439b984db4a2f284ed3740",
        createdAt: "2023-11-03T21:48:01.286Z",
        __v: 0,
      },
      {
        _id: "65479800dd6a41eab300d225",
        title: "testing title by anju ",
        description: "testing description by anju",
        imgUrl:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-guljl&psig=AOvVaw2CFqyNX52A4BwCdW_rU5um&ust=1699277165175000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKDfsfD6rIIDFQAAAAAdAAAAABAE",
        user: "654797a4dd6a41eab300d21e",
        createdAt: "2023-11-05T13:26:24.389Z",
        __v: 0,
      },
      {
        _id: "654899dd37b04ffb3eac84ad",
        title: "Addy",
        description: "Geyh",
        imgUrl: "",
        user: "65489979bc3ef8607bce7649",
        createdAt: "2023-11-06T07:46:37.359Z",
        __v: 0,
      },
      {
        _id: "6549153205a74ef9cb410c48",
        title: "qwergeth",
        description: "ewrgetf",
        imgUrl: "efrgf",
        user: "6549150d5c2e7c4c03167f4d",
        createdAt: "2023-11-06T16:32:50.132Z",
        __v: 0,
      },
      {
        _id: "654db7b84716da42837450c1",
        title: "nyc app",
        description: "this is nyc app",
        imgUrl: "sam@gmail.com",
        user: "654db7864716da42837450ad",
        createdAt: "2023-11-10T04:55:20.191Z",
        __v: 0,
      },
      {
        _id: "6550888fd9822991f86711b0",
        title: " n bm ",
        description: ",hj,hj,h",
        imgUrl: "hj,,h",
        user: "6550882c2c779c017def9200",
        createdAt: "2023-11-12T08:10:55.852Z",
        __v: 0,
      },
      {
        _id: "65687c61bbdcc5507aaa29c1",
        title: "titl",
        description: "dscription",
        imgUrl:
          "https://www.google.com/search?q=javascript&sca_esv=586607062&rlz=1C1CHWL_enIN1035IN1035&tbm=isch&sxsrf=AM9HkKl3lz6HSDvhO0S_mR7G04fd07CpNg:1701346378065&source=lnms&sa=X&ved=2ahUKEwimnISU2euCAxWRyzgGHW81C0AQ_AUoAXoECAEQAw&biw=1366&bih=651&dpr=1#imgrc=2beJ_ZIdzTYOYM",
        user: "65687c00bbdcc5507aaa29ac",
        createdAt: "2023-11-30T12:13:21.357Z",
        __v: 0,
      },
      {
        _id: "6575ceff7b225eed54518e83",
        title: "PC",
        description: "PC blog",
        imgUrl:
          "data:image/png;base64,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",
        user: "656d41c20586b05a2fa4b8b8",
        createdAt: "2023-12-10T14:45:19.027Z",
        __v: 0,
      },
      {
        _id: "658fb23ff6d3aa695f563ba8",
        title: "football",
        description: "i love football",
        imgUrl: "",
        user: "658fb229f6d3aa695f563ba5",
        createdAt: "2023-12-30T06:01:35.701Z",
        __v: 0,
      },
      {
        _id: "65f2b1ad418ae82b2fd89d00",
        title: "i am king",
        description: "just a king story",
        imgUrl:
          "https://m.media-amazon.com/images/I/61Gcq2mPzgL._AC_UF1000,1000_QL80_.jpg",
        user: "65f2b165418ae82b2fd89cf9",
        createdAt: "2024-03-14T08:13:33.074Z",
        __v: 0,
      },
      {
        _id: "65f8507d1256ab545d98e7de",
        title: "hey",
        description: "this is decreption",
        imgUrl: "",
        user: "65f850571256ab545d98e7d7",
        createdAt: "2024-03-18T14:32:29.573Z",
        __v: 0,
      },
      {
        _id: "660926102700f2c23d3c91c4",
        title: "myMERN",
        description:
          "Sure, here's a random text of approximately 400 words:  In the heart of the bustling city, amid the cacophony of car horns and the chatter of pedestrians, there stood a quaint little bookstore, its windows adorned with faded posters of literary classics. Inside, the scent of old books mingled with the aroma of freshly brewed coffee, creating an atmosphere of comfort and nostalgia. Rows upon rows of bookshelves lined the walls, each one filled with stories waiting to be discovered.  Amidst the shelves, a young woman with auburn hair and glasses perused the titles, her fingers trailing along the spines as she searched for the perfect escape. She finally settled on a worn paperback, its pages yellowed with age but brimming with promise. With a contented sigh, she made her way to the cozy reading nook tucked away in the corner, where she curled up with her newfound treasure and lost herself in its pages.  Meanwhile, outside the bookstore, the city continued to bustle with life. Businessmen hurried past, their minds consumed with deadlines and meetings, while tourists marveled at the towering skyscrapers that loomed overhead. But amidst the chaos, there were moments of serenity to be found – a couple sharing a quiet moment on a bench, a street performer captivating passersby with his music, a stray cat basking in the warmth of the afternoon sun.  As the day faded into evening, the streets grew quieter, the hustle and bustle giving way to a sense of tranquility. The neon lights of the city began to flicker to life, casting a soft glow upon the pavement below. In the distance, the faint strains of music drifted through the air, beckoning those willing to follow its melody.  Back in the bookstore, the young woman reluctantly closed the book she had been engrossed in, a wistful smile tugging at her lips. As she made her way to the counter to purchase her newfound treasure, she couldn't help but feel a sense of gratitude for the little sanctuary amidst the chaos of the city.  Outside, the stars began to twinkle overhead, their light mingling with the glow of the street lamps below. And for a moment, all was right with the world – a fleeting glimpse of peace in a city that never seemed to sleep.",
        imgUrl:
          "data:image/png;base64,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",
        user: "66092586d032bea09f3fdf6c",
        createdAt: "2024-03-31T09:00:00.168Z",
        __v: 0,
      },
      {
        _id: "660926102700f2c23d3c91ca",
        title: "myMERN",
        description:
          "Sure, here's a random text of approximately 400 words:  In the heart of the bustling city, amid the cacophony of car horns and the chatter of pedestrians, there stood a quaint little bookstore, its windows adorned with faded posters of literary classics. Inside, the scent of old books mingled with the aroma of freshly brewed coffee, creating an atmosphere of comfort and nostalgia. Rows upon rows of bookshelves lined the walls, each one filled with stories waiting to be discovered.  Amidst the shelves, a young woman with auburn hair and glasses perused the titles, her fingers trailing along the spines as she searched for the perfect escape. She finally settled on a worn paperback, its pages yellowed with age but brimming with promise. With a contented sigh, she made her way to the cozy reading nook tucked away in the corner, where she curled up with her newfound treasure and lost herself in its pages.  Meanwhile, outside the bookstore, the city continued to bustle with life. Businessmen hurried past, their minds consumed with deadlines and meetings, while tourists marveled at the towering skyscrapers that loomed overhead. But amidst the chaos, there were moments of serenity to be found – a couple sharing a quiet moment on a bench, a street performer captivating passersby with his music, a stray cat basking in the warmth of the afternoon sun.  As the day faded into evening, the streets grew quieter, the hustle and bustle giving way to a sense of tranquility. The neon lights of the city began to flicker to life, casting a soft glow upon the pavement below. In the distance, the faint strains of music drifted through the air, beckoning those willing to follow its melody.  Back in the bookstore, the young woman reluctantly closed the book she had been engrossed in, a wistful smile tugging at her lips. As she made her way to the counter to purchase her newfound treasure, she couldn't help but feel a sense of gratitude for the little sanctuary amidst the chaos of the city.  Outside, the stars began to twinkle overhead, their light mingling with the glow of the street lamps below. And for a moment, all was right with the world – a fleeting glimpse of peace in a city that never seemed to sleep.",
        imgUrl:
          "data:image/png;base64,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",
        user: "66092586d032bea09f3fdf6c",
        createdAt: "2024-03-31T09:00:00.354Z",
        __v: 0,
      },
      {
        _id: "660926102700f2c23d3c91cd",
        title: "myMERN",
        description:
          "Sure, here's a random text of approximately 400 words:  In the heart of the bustling city, amid the cacophony of car horns and the chatter of pedestrians, there stood a quaint little bookstore, its windows adorned with faded posters of literary classics. Inside, the scent of old books mingled with the aroma of freshly brewed coffee, creating an atmosphere of comfort and nostalgia. Rows upon rows of bookshelves lined the walls, each one filled with stories waiting to be discovered.  Amidst the shelves, a young woman with auburn hair and glasses perused the titles, her fingers trailing along the spines as she searched for the perfect escape. She finally settled on a worn paperback, its pages yellowed with age but brimming with promise. With a contented sigh, she made her way to the cozy reading nook tucked away in the corner, where she curled up with her newfound treasure and lost herself in its pages.  Meanwhile, outside the bookstore, the city continued to bustle with life. Businessmen hurried past, their minds consumed with deadlines and meetings, while tourists marveled at the towering skyscrapers that loomed overhead. But amidst the chaos, there were moments of serenity to be found – a couple sharing a quiet moment on a bench, a street performer captivating passersby with his music, a stray cat basking in the warmth of the afternoon sun.  As the day faded into evening, the streets grew quieter, the hustle and bustle giving way to a sense of tranquility. The neon lights of the city began to flicker to life, casting a soft glow upon the pavement below. In the distance, the faint strains of music drifted through the air, beckoning those willing to follow its melody.  Back in the bookstore, the young woman reluctantly closed the book she had been engrossed in, a wistful smile tugging at her lips. As she made her way to the counter to purchase her newfound treasure, she couldn't help but feel a sense of gratitude for the little sanctuary amidst the chaos of the city.  Outside, the stars began to twinkle overhead, their light mingling with the glow of the street lamps below. And for a moment, all was right with the world – a fleeting glimpse of peace in a city that never seemed to sleep.",
        imgUrl:
          "data:image/png;base64,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",
        user: "66092586d032bea09f3fdf6c",
        createdAt: "2024-03-31T09:00:00.421Z",
        __v: 0,
      },
      {
        _id: "660926f32700f2c23d3c9229",
        title: "myMERN",
        description:
          "Sure, here's a random text of approximately 400 words:  In the heart of the bustling city, amid the cacophony of car horns and the chatter of pedestrians, there stood a quaint little bookstore, its windows adorned with faded posters of literary classics. Inside, the scent of old books mingled with the aroma of freshly brewed coffee, creating an atmosphere of comfort and nostalgia. Rows upon rows of bookshelves lined the walls, each one filled with stories waiting to be discovered.  Amidst the shelves, a young woman with auburn hair and glasses perused the titles, her fingers trailing along the spines as she searched for the perfect escape. She finally settled on a worn paperback, its pages yellowed with age but brimming with promise. With a contented sigh, she made her way to the cozy reading nook tucked away in the corner, where she curled up with her newfound treasure and lost herself in its pages.  Meanwhile, outside the bookstore, the city continued to bustle with life. Businessmen hurried past, their minds consumed with deadlines and meetings, while tourists marveled at the towering skyscrapers that loomed overhead. But amidst the chaos, there were moments of serenity to be found – a couple sharing a quiet moment on a bench, a street performer captivating passersby with his music, a stray cat basking in the warmth of the afternoon sun.  As the day faded into evening, the streets grew quieter, the hustle and bustle giving way to a sense of tranquility. The neon lights of the city began to flicker to life, casting a soft glow upon the pavement below. In the distance, the faint strains of music drifted through the air, beckoning those willing to follow its melody.  Back in the bookstore, the young woman reluctantly closed the book she had been engrossed in, a wistful smile tugging at her lips. As she made her way to the counter to purchase her newfound treasure, she couldn't help but feel a sense of gratitude for the little sanctuary amidst the chaos of the city.  Outside, the stars began to twinkle overhead, their light mingling with the glow of the street lamps below. And for a moment, all was right with the world – a fleeting glimpse of peace in a city that never seemed to sleep.",
        imgUrl:
          "data:image/png;base64,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",
        user: "660926c32700f2c23d3c9223",
        createdAt: "2024-03-31T09:03:47.927Z",
        __v: 0,
      },
      {
        _id: "66356dd02a653a7948374b1a",
        title: "Mountain - Peace",
        description:
          "The mountain landscape unfolds in a majestic panorama, where rugged peaks pierce the sky, shrouded in wisps of ethereal mist. Cascading waterfalls adorn sheer cliffs, their gentle roar harmonizing with the rustle of pine forests below. The air is crisp, infused with the scent of wildflowers, evoking a sense of serenity amidst nature's grandeur.",
        imgUrl:
          "https://media.istockphoto.com/id/474267374/photo/reflections-on-a-lake.webp?b=1&s=170667a&w=0&k=20&c=8VDTbBQy-MAiQLWBbEhor5mwG1OPDHriufTAIwU2nsQ=",
        user: "66356d5e2a653a7948374b13",
        createdAt: "2024-05-03T23:05:52.663Z",
        __v: 0,
      },
      {
        _id: "669a3781d09386491c38c8d6",
        title: "Study ",
        description: "I want to study",
        imgUrl: "Ndnfnf",
        user: "669a3763d09386491c38c8b9",
        createdAt: "2024-07-19T09:53:05.072Z",
        __v: 0,
      },
    ],
  });
};

export const getBlogById = async (req, res) => {
  const id = req.params.id;

  const blog = await Blog.findById(id);

  if (!blog)
    return res.status(404).json({
      success: false,
      message: "Invalid ID",
    });

  res.json({
    success: true,
    message: "your blog",
    blog,
  });
};
