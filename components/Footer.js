export default function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `  <div class="container">
    <div class="footer-container">
      <ul>
        <li class="footer-header">Company Info</li>
        <li class="description">About Us</li>
        <li class="description">Carrier</li>
        <li class="description">We are hiring</li>
        <li class="description">Blog</li>
      </ul>

      <ul>
        <li class="footer-header">Legal</li>
        <li class="description">About Us</li>
        <li class="description">Carrier</li>
        <li class="description">We are hiring</li>
        <li class="description">Blog</li>
      </ul>
      <ul>
        <li class="footer-header">Features</li>
        <li class="description">Business Marketing</li>
        <li class="description">User Analytic</li>
        <li class="description">Live Chat</li>
        <li class="description">Unlimited Support</li>
      </ul>
      <ul>
        <li class="footer-header">Resources</li>
        <li class="description">IOS & Android</li>
        <li class="description">Request a Demo</li>
        <li class="description">Customers</li>
        <li class="description">API</li>
      </ul>
      <ul class="footer-last-column">
        <li class="footer-header">Get In Touch</li>
        <li class="description">
        <a href="tel:+4805550103">
          <img src="../assets/images/phone.svg"alt="a phone icon" />(480) 555-0103
          </a>
        </li>
        <li class="description">
        <address><img src="../assets/images/map.svg" alt="a map icon" />4517 Washington Ave. Manchester, Kentucky 39495</address>
        </li>
        <li class="description">
        <a href="mailto:debra.holt@example.com">
          <img src="../assets/images/mail.svg" alt="a mail icon" />
          debra.holt@example.com</a> 
        </li>
      </ul>
    </div>
    <div class="footer-bottom">
      <span class="description"
        >Made With Love By Figmaland All Right Reserved
      </span>
      <div class="footer-bottom-icons">
        <a  target="_top" href="https://www.facebook.com/"
          ><img src="../assets/images/facebook.svg" alt=""
        /></a>
        <a target="_top"  href="https://www.instagram.com/"
          ><img src="../assets/images/instagram.svg" alt=""
        /></a>
        <a  target="_top" href="https://www.x.com/"
          ><img src="../assets/images/twitter.svg" alt=""
        /></a>
      </div>
    </div>
  </div>`;
  return footer;
}
