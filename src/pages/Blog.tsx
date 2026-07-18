import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const blogPosts = [
  {
    id: "benefits-of-learning-quran-online",
    title: "10 Benefits of Learning Quran Online",
    excerpt: "Discover how online Quran education has transformed the way Muslims around the world connect with the Holy Book.",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=600&q=80",
    category: "Education",
    author: "Sheikh Abdullah",
    date: "Nov 20, 2024",
    readTime: "5 min read",
  },
  {
    id: "tajweed-rules-beginners-guide",
    title: "A Beginner's Guide to Tajweed Rules",
    excerpt: "Learn the essential Tajweed rules that will help you recite the Quran with proper pronunciation and melody.",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&q=80",
    category: "Tajweed",
    author: "Qari Hassan",
    date: "Nov 15, 2024",
    readTime: "8 min read",
  },
  {
    id: "hifz-memorization-tips",
    title: "Effective Hifz Memorization Techniques",
    excerpt: "Proven strategies and tips to help you memorize the Quran more effectively and retain it for life.",
    image: "https://images.unsplash.com/photo-1579187707643-35646d22b596?w=600&q=80",
    category: "Hifz",
    author: "Sheikh Abdullah",
    date: "Nov 10, 2024",
    readTime: "6 min read",
  },
  {
    id: "teaching-quran-to-kids",
    title: "How to Teach Quran to Kids: A Parent's Guide",
    excerpt: "Tips and strategies for parents who want to instill a love for the Quran in their children from an early age.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    category: "Parenting",
    author: "Ustaza Fatima",
    date: "Nov 5, 2024",
    readTime: "7 min read",
  },
  {
    id: "importance-of-arabic-quran-study",
    title: "Why Learning Arabic Enhances Quran Study",
    excerpt: "Understanding Arabic opens doors to deeper comprehension of the Quran's meanings and nuances.",
    image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?w=600&q=80",
    category: "Arabic",
    author: "Ustaza Maryam",
    date: "Oct 28, 2024",
    readTime: "5 min read",
  },
  {
    id: "ramadan-quran-routine",
    title: "Building a Quran Routine for Ramadan",
    excerpt: "Practical tips for maximizing your Quran recitation and study during the blessed month of Ramadan.",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80",
    category: "Ramadan",
    author: "Sheikh Abdullah",
    date: "Oct 20, 2024",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Quran Learning Tips & Islamic Education - Mushaf Al Noor</title>
        <meta name="description" content="Read our latest articles on Quran learning, Tajweed tips, Hifz techniques, and Islamic education. Expert insights from our certified teachers." />
        <link rel="canonical" href="https://mushafalnoor.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-20" />
            <div className="container-custom relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center"
              >
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Blog
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Insights & <span className="gradient-text">Knowledge</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Explore articles on Quran learning, Tajweed tips, Islamic education,
                  and spiritual growth from our expert teachers.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover group"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-16 bg-primary">
            <div className="container-custom text-center">
              <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get weekly Quran learning tips, new articles, and special offers delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <Button variant="hero-gold" size="lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
