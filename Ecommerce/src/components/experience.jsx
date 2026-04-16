import React from "react";
import Card from "../components/card";
import "../style/experience.css"

function Experiences() {
  return (
    <div className="experiences">

      <h2>Experiences in New Delhi</h2>
      <div className="row-container">
        <Card
          title="cultural tours"
          location="New Delhi"
          description="68 avlilable"
          image="https://a0.muscache.com/im/pictures/AirbnbPlatformAssets/AirbnbPlatformAssets-ExperiencesCategoryTypeCarousel/original/9fb11d9a-f9b2-445b-9d24-d76254dd0828.png?im_w=240" 
        />
        <Card
          title="Landmarks"
          location="New Delhi"
          description="48 avlilable"
          image="https://a0.muscache.com/im/pictures/AirbnbPlatformAssets/AirbnbPlatformAssets-ExperiencesCategoryTypeCarousel/original/19f3044c-1ccd-473c-8a11-f33b5959141c.png?im_w=240" 
        />
        <Card
          title="Foods tours"
          location="New Delhi"
          description="24 avlilable"
          image="https://a0.muscache.com/im/pictures/AirbnbPlatformAssets/AirbnbPlatformAssets-ExperiencesCategoryTypeCarousel/original/bd4e79c9-7636-479e-8039-1a7b277af9c4.png?im_w=240" 
        />
        <Card
          title="Art and Workshops"
          location="New Delhi"
          description="20 avlilable"
          image="https://a0.muscache.com/im/pictures/AirbnbPlatformAssets/AirbnbPlatformAssets-ExperiencesCategoryTypeCarousel/original/0df51967-fdbb-4782-b740-b8460161fce0.png?im_w=240" 
        />
        <Card
          title="Cooking"
          location="New Delhi"
          description="17 avlilable"
          image="https://a0.muscache.com/im/pictures/AirbnbPlatformAssets/AirbnbPlatformAssets-ExperiencesCategoryTypeCarousel/original/fbc5d01b-0810-4c39-b771-8da65c5ceda8.png?im_w=240" 
        />
        <Card
          title="Forts and Palaces"
          location="New Delhi"
          description="40 avlilable"
          image="data:image/jpeg;base64,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" 
        />
        <Card
          title="Outdoors"
          location="New Delhi"
          description="22 avlilable"
          image="https://a0.muscache.com/im/pictures/AirbnbPlatformAssets/AirbnbPlatformAssets-ExperiencesCategoryTypeCarousel/original/de445387-ebb1-4670-9de1-8b1cb357e9b7.png?im_w=240" 
        />
        <Card
          title="Shopping and Fashion"
          location="New Delhi"
          description="52 avlilable"
          image="https://a0.muscache.com/im/pictures/AirbnbPlatformAssets/AirbnbPlatformAssets-ExperiencesCategoryTypeCarousel/original/77e0d333-62d3-4467-93c4-6ac49353494b.png?im_w=240" 
        />
      </div>

      <h2>Popular experiences in New Delhi</h2>
      <div className="row-container">
        <Card
          title="Old Delhi Food, Temple, Spices Tour"
          location="New Delhi"
          description="From ₹5000/Guest | ★4.97"
          image="https://a0.muscache.com/im/pictures/lombard/MtTemplate-111656-active_media/original/66005278-9da9-433d-ae29-df10057bbc07.jpg?im_w=480" 
        />
        <Card
          title="Taj Mahal and Agra Tour"
          location="New Delhi"
          description="From ₹4000/Guest | ★3.7"
          image="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1180121-active_media/original/9b2014e3-6110-49f4-9fbd-cce46b68d6d7.jpg?im_w=480" 
        />
        <Card
          title="Temple and Rickshaw Tour"
          location="New Delhi"
          description="From ₹3000/Guest | ★4.8"
          image="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1532393-active_media/original/1578fd6d-9fa6-40d0-a25e-e44bf70337fd.jpg?im_w=480" 
        />
        <Card
          title="Food and Culture Tour"
          location="New Delhi"
          description="From ₹2500/Guest | ★4.9"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-6744339/original/d018a17b-03e0-4116-8dc7-539586959e09.jpeg?im_w=480" 
        />
        <Card
          title="10+ street-food tasting & Spice Market"
          location="Old Delhi"
          description="From ₹2000/Guest | ★4.9"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-332630/original/1765d0b8-6229-45aa-92d7-ac917f581023.jpeg?im_w=480" 
        />
        <Card
          title="Same Day Taj Mahal & Agra Fort Tour"
          location="New Delhi"
          description="From ₹3500/Guest | ★4.8"
          image="https://a0.muscache.com/im/pictures/lombard/MtTemplate-5447261-active_media/original/f20b5261-5b1e-4544-a362-31d5bd8fa223.jpg?im_w=480" 
        />
        <Card
          title="Enjoy the contrasting charms"
          location="New Delhi"
          description="From ₹3000/Guest | ★4.4"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-529291/original/218f14da-95c4-49f4-aff8-886fd68d3b95.jpeg?im_w=480" 
        />
        <Card
          title="Fullday by Tuk Tuk"
          location="New Delhi"
          description="From ₹4000/Guest | ★4.3"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-806519/original/b3f0d424-e909-42d7-ba38-ec2e7aaed280.jpeg?im_w=480" 
        />
        <Card
          title="Fullday by Car"
          location="New Delhi"
          description="From ₹7000/Guest | ★4.5"
          image="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1180121-active_media/original/85ceaf2d-2e9e-4df8-b4db-29c9aae86c19.jpg?im_w=480" 
        /> 
        <Card
          title=""
          description=""
          image="" 
        />      
      </div>

      <h2>Airbnb Originals</h2>
      <div className="row-container">
        <Card
          title="VIP access to a LALIGA match with Isabel Forner"
          location="Mendizorroza Stadium"
          description="Go behind the scenes,Mendizorroza Stadium with the renowned commentator."
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-6922346/original/9a0b3a6a-c101-4593-a610-b27884bd76a9.png?im_w=480" 
        /> 
        <Card
          title="Paella and a LALIGA game with Arturo Valls"
          location="Alcorcon Stadium"
          description="Coming 30th April"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-6922342/original/27d3ed13-166e-4c4a-ab41-9dc1a2c3a82e.png?im_w=480" 
        /> 
        <Card
          title="Carve marble with a third-generation sculptor"
          location="Carrara, Italy"
          description="From ₹7000/Guest | ★4.5"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-5975701/original/1536d75f-932a-459d-bcfa-c43d8bc13660.jpeg?im_w=480" 
        /> 
        <Card
          title="Experience a sacred Buddhist ritual and yoga class"
          location="Kathmandu, Nepal"
          description="From ₹5000/Guest | ★4.9"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-5946904/original/36e8cd2c-6857-4c6d-999b-1a347991d561.jpeg?im_w=480" 
        /> 
        <Card
          title="Beyond the Senses-Immersive Elemental Yoga Journey"
          location="Bali, Indonesia"
          description="From ₹4000/Guest | ★4.8"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-6099340/original/d3406a4b-6a93-4c20-8ede-58a215540bfb.jpeg?im_w=480" 
        /> 
        <Card
          title="Learn mixology and cocktail tasting in a speakeasy"
          location="New York, USA"
          description="From ₹3000/Guest | ★4.7"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-5998421/original/88d63c1e-7736-42e8-8817-a98baccf5f0f.jpeg?im_w=480" 
        /> 
        <Card
          title="Prosecco Hills: discover a small producer"
          location="Veneto, Italy"
          description="From ₹3500/Guest | ★4.3"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-6027335/original/4b535031-c89d-4787-8f26-6572df64619a.jpeg?im_w=480" 
        /> 
        <Card
          title="Savor organic matcha in a tea ceremony in Shibuya"
          location="Tokyo, Japan"
          description="From ₹2200/Guest | ★4.9"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-5749656/original/79288945-24da-4d87-a194-1c2a4110d4da.jpeg?im_w=960" 
        /> 
        <Card
          title="Discover Melbourne's acclaimed coffee culture"
          location="Australia"
          description="From ₹2500/Guest | ★4.8"
          image="https://a0.muscache.com/im/pictures/lombard/MtTemplate-6086622-active_media/original/edf691f8-c6d2-4cfc-9a1a-cf5707494bf5.jpg?im_w=960" 
        /> 
        <Card
          title=""
          description=""
          image="" 
        /> 
      </div>
      
      <h2>Experiences this weekend</h2>
      <div className="row-container">
        <Card
          title="Old Delhi's Temples, Rickshaw, Food & Spice Market"
          location="New Delhi"
          description="From ₹3000/Guest | ★4.7"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-5501416/original/902ad2db-e50b-4500-b7dc-faf5ae470947.jpeg?im_w=960" 
        />
        <Card
          title="Fullday Old & New Delhi by Tuk Tuk"
          location="New Delhi"
          description="From ₹7000/Guest | ★4.3"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-806519/original/713ee96b-3325-4768-9bfc-e374f5d2ba80.jpeg?im_w=480" 
        />
        <Card
          title="Unveil Delhi's Food, Spirituality, Spice & Culture"
          location="New Delhi"
          description="From ₹3500/Guest | ★4.6"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-4289504/original/96df1772-742a-4898-89b0-7b1666bca544.jpeg?im_w=480" 
        />
        <Card
          title="Chai Workshop & Food in Local Indian Family Home"
          location="New Delhi"
          description="From ₹2000/Guest | ★4.9"
          image="https://a0.muscache.com/im/pictures/lombard/MtTemplate-3215200-active_media/original/e73c32fd-7289-4c73-85c1-0ddaa4230745.jpg?im_w=480" 
        />
        <Card
          title="Explore delhi's street food"
          location="New Delhi"
          description="From ₹2500/Guest | ★4.8"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-1131153/original/9ddc5540-f809-4ca2-bd26-caa2fad4d08d.jpeg?im_w=480" 
        />
        <Card
          title="Explore Old Delhi's food, sights and stories"
          location="New Delhi"
          description="From ₹3000/Guest | ★4.9"
          image="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1190842-active_media/original/63016388-9c70-45bc-8fa5-f9ca61580c6a.jpg?im_w=480" 
        />
        <Card
          title="Same-Day Taj Mahal Experience, Delhi"
          location="New Delhi"
          description="From ₹8000/Guest | ★4.8"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-1243895/original/66150cf6-dc72-4cac-9185-d5c99ed7ac44.jpeg?im_w=480" 
        />
        <Card
          title="Tuk Tuk Delhi Experience India"
          location="New Delhi"
          description="From ₹4000/Guest | ★4.5"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-515672/original/2a93a113-031e-4145-87e6-c807f90b2b01.jpeg?im_w=480" 
        />
        <Card
          title="Explore Old and New Delhi’s Monuments with Guide"
          location="New Delhi"
          description="From ₹9000/Guest | ★4.6"
          image="https://a0.muscache.com/im/pictures/Mt/MtTemplate-1342390/original/49e17197-7fae-452c-971c-11523b4a2eea.jpeg?im_w=480" 
        />
        <Card
          title=""
          description=""
          image="" 
        />
      </div>
 
    </div>
  );
}

export default Experiences;