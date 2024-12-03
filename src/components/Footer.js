import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-green-400 py-4 shadow-lg">
      <div className="md:px-12 mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand and Copyright */}
          <div className="text-white text-center md:text-left text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-lg">ShortLinks.</span> All
            rights reserved.
          </div>

          {/* Creator and Social Links */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-white text-sm text-center md:text-left">
              Created by <span className="font-semibold">Suraj Gharpankar</span>
            </span>
            <div className="flex gap-6">
              <a
                href="https://github.com/surajgharpankar28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors transform hover:scale-125"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=surajgharpankar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors transform hover:scale-125"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/surajgharpankar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors transform hover:scale-125"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:surajgharpankar28@gmail.com"
                className="text-white hover:text-blue-500 transition-colors transform hover:scale-125"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
