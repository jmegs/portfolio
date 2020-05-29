import Avatar from "../components/Avatar"
import { NextSeo } from "next-seo"

export default () => (
  <>
    <NextSeo
      title="About • John Meguerian" />
    <Avatar />
    <div class="about prose">
      <p>Product designer and developer based in NYC.</p>

      <p>
        Currently I’m on the growth team at{" "}
        <a href="https://squarespace.com">Squarespace</a>. I focus on the new
        user experience — creating onboarding and education features, and
        collaborating with other teams to keep the initial experience coherent
        across the full product. I also work on developing processes and tools
        to help designers and developers work better together.
      </p>

      <p>
        Previously I worked as an Experience Designer at{" "}
        <a href="https://rga.com">R/GA</a>, where I built products and consumer
        experiences including a personal training app for Equinox and an
        interactive retail experience and ecommerce website for Samsung.
      </p>
    </div>
  </>
)
