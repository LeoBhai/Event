'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  FilterOutlined,
  BookOutlined,
  ShareAltOutlined,
  BellOutlined,
  RocketOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Personalized News Feed`,
      description: `Tailor your news experience with our smart algorithm that learns your preferences.`,
      icon: <EditOutlined />,
    },
    {
      heading: `Advanced Filtering`,
      description: `Cut through the noise with powerful filters to focus on what matters to you.`,
      icon: <FilterOutlined />,
    },
    {
      heading: `Bookmark and Save`,
      description: `Never lose track of important articles with our easy bookmarking feature.`,
      icon: <BookOutlined />,
    },
    {
      heading: `Share and Discuss`,
      description: `Share interesting news with friends and join the conversation.`,
      icon: <ShareAltOutlined />,
    },
    {
      heading: `Custom Notifications`,
      description: `Stay up-to-date with alerts on breaking news and topics you care about.`,
      icon: <BellOutlined />,
    },
    {
      heading: `Speed Reading Tools`,
      description: `Consume news faster with our innovative speed reading technology.`,
      icon: <RocketOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Busy Professional`,
      content: `The News Aggregator has transformed how I stay informed. I save hours each day and never miss important updates in my industry.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `Journalist`,
      content: `As a journalist, this tool is invaluable. It helps me track trends and breaking news across multiple sources effortlessly.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Student`,
      content: `The personalized feed and bookmarking features have made research for my studies so much easier. I'm more informed and it takes less time!`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Thompson`,
      designation: `Retiree`,
      content: `I love how I can keep up with world events and my hobbies all in one place. It's simplified my daily routine.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Patel`,
      designation: `Small Business Owner`,
      content: `The News Aggregator helps me stay ahead of market trends. It's like having a personal news assistant.`,
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      name: `John Doe`,
      designation: `Tech Enthusiast`,
      content: `The filtering options are fantastic. I can dive deep into tech news without distractions. It's a game-changer for staying informed in my field.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Perfect for casual readers`,
      monthly: 9,
      yearly: 89,
      features: [
        `Personalized news feed`,
        `Basic filtering`,
        `5 bookmarks per day`,
      ],
    },
    {
      title: `Pro`,
      description: `Ideal for news enthusiasts`,
      monthly: 19,
      yearly: 189,
      features: [
        `All Basic features`,
        `Advanced filtering`,
        `Unlimited bookmarks`,
        `Custom notifications`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `For organizations and power users`,
      monthly: 49,
      yearly: 489,
      features: [
        `All Pro features`,
        `API access`,
        `Team collaboration`,
        `Priority support`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the personalized news feed work?`,
      answer: `Our AI-powered algorithm learns from your reading habits and preferences to curate a news feed tailored specifically to your interests.`,
    },
    {
      question: `Can I use the News Aggregator on multiple devices?`,
      answer: `Yes, your account syncs across all devices, allowing you to access your personalized news feed, bookmarks, and settings anywhere.`,
    },
    {
      question: `How often is the news updated?`,
      answer: `We update our news sources in real-time, ensuring you always have access to the latest information and breaking news.`,
    },
    {
      question: `Is there a limit to how many news sources I can add?`,
      answer: `No, you can add as many news sources as you like to create your perfect news ecosystem.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Sign Up`,
      description: `Create your account in seconds and start personalizing your news experience.`,
    },
    {
      heading: `Select Your Interests`,
      description: `Choose from a wide range of topics and sources to customize your feed.`,
    },
    {
      heading: `Explore and Engage`,
      description: `Dive into your personalized news stream, bookmark articles, and share insights.`,
    },
    {
      heading: `Refine and Optimize`,
      description: `Fine-tune your preferences over time for an ever-improving news experience.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😵`,
      title: `Overwhelmed by information overload`,
    },
    {
      emoji: `⏳`,
      title: `Wasting time searching for relevant news`,
    },
    {
      emoji: `😞`,
      title: `Missing important updates in your field`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Stay Informed, Not Overwhelmed`}
        subtitle={`Curate your perfect news experience with our intelligent aggregator. Cut through the noise and focus on what matters to you.`}
        buttonText={`Start Your Journey`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/9qsdZm-news-Fs9s`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={10000}
            suffixText={`informed readers`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Trusted by Leading Publications`}
      />
      <LandingPainPoints
        title={`The Information Overload Epidemic: 34GB of Data Consumed Daily`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Path to Effortless News Consumption`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Empower Your News Experience`}
        subtitle={`Discover how our features can transform your daily information intake`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories from Our Community`}
        subtitle={`See how others have revolutionized their news consumption`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Knowledge, Choose Your Plan`}
        subtitle={`Select the perfect package to fuel your information journey`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Your Questions, Answered`}
        subtitle={`Everything you need to know about optimizing your news experience`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Take Control of Your News Intake?`}
        subtitle={`Join thousands of informed readers and start your personalized news journey today.`}
        buttonText={`Get Started Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
