import { MenuItemType } from "constants/Menu";
import Logo from "icons/Logo";
import { MenuItem } from "types/Menu";
import NavigationItem from "./NavigationItem";
import ProductIcon from "icons/Product";
import MangeIcon from "icons/Mange";
import AnalyseIcon from "icons/Analyse";
import ProductivityIcon from "icons/Productivity";
import IntegrationsIcon from "icons/Integrations";

const menu: MenuItem[] = [
  {
    id: 1,
    name: "Features",
    href: "",
    type: MenuItemType.FEATURES,
    children: [
      {
        id: 1,
        name: "Product",
        description: "Learn about Chatwoot's core features",
        href: "##",
        icon: <ProductIcon />,
        children: [
          {
            subMenuItemId: 1,
            name: "Website Live Chat",
            description: "Simple and elegant live chat for your website",
            link: "/features/channels",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.562 3a7.5 7.5 0 0 0-6.798 10.673l-.724 2.842a1.25 1.25 0 0 0 1.504 1.524c.75-.18 1.903-.457 2.93-.702A7.5 7.5 0 1 0 9.561 3Zm-6 7.5a6 6 0 1 1 3.33 5.375l-.244-.121l-.264.063c-.923.22-1.99.475-2.788.667l.69-2.708l.07-.276l-.13-.253a5.971 5.971 0 0 1-.664-2.747Zm11 10.5a7.475 7.475 0 0 1-5.1-2h.1c.718 0 1.415-.089 2.08-.257c.865.482 1.86.757 2.92.757c.96 0 1.866-.225 2.67-.625l.243-.121l.264.063c.922.22 1.966.445 2.74.61c-.175-.751-.414-1.756-.642-2.651l-.07-.276l.13-.253a5.971 5.971 0 0 0 .665-2.747a5.995 5.995 0 0 0-2.747-5.042a8.44 8.44 0 0 0-.8-2.047a7.503 7.503 0 0 1 4.344 10.263c.253 1.008.509 2.1.671 2.803a1.244 1.244 0 0 1-1.467 1.5a132.62 132.62 0 0 1-2.913-.64a7.476 7.476 0 0 1-3.088.663Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 1,
            name: "Omnichannel inbox",
            description:
              "Connect any channel and engage your customers from one place",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.5 3a2.25 2.25 0 0 1 2.25 2.25v6h6A2.25 2.25 0 0 1 21 13.5v5.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3h5.25Zm.75 9.75H4.5v6c0 .414.336.75.75.75h5.999l.001-6.75Zm7.5 0h-6.001v6.75h6.001a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75ZM10.5 4.5H5.25a.75.75 0 0 0-.75.75v6h6.75v-6a.75.75 0 0 0-.75-.75Zm7.398-2.493L18 2a.75.75 0 0 1 .743.648l.007.102v2.5h2.5a.75.75 0 0 1 .743.648L22 6a.75.75 0 0 1-.648.743l-.102.007h-2.5v2.5a.75.75 0 0 1-.648.743L18 10a.75.75 0 0 1-.743-.648l-.007-.102v-2.5h-2.5a.75.75 0 0 1-.743-.648L14 6a.75.75 0 0 1 .648-.743l.102-.007h2.5v-2.5a.75.75 0 0 1 .648-.743Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 1,
            name: "Team collaboration",
            description:
              "Collaborate and manage conversations using a shared inbox",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M11.5 1.998a2.501 2.501 0 0 0 0 5.003c.294 0 .563-.051.83-.148a.5.5 0 1 1 .34.94a3.397 3.397 0 0 1-1.17.208a3.501 3.501 0 1 1 3.502-3.502A1.5 1.5 0 0 1 12.5 5.617a1.5 1.5 0 1 1-.354-2.472a.498.498 0 0 1 .854.353v1a.5.5 0 0 0 1.002.004V4.5A2.501 2.501 0 0 0 11.5 1.998ZM11 4.5a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0Zm4 5V7.328a4.506 4.506 0 0 1-1 .914V9.5a1.5 1.5 0 0 1-1.5 1.5H8.312L5 13.897v-2.899H3.5A1.5 1.5 0 0 1 2 9.5v-5A1.5 1.5 0 0 1 3.5 3h3.756c.126-.355.295-.691.502-1H3.5A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.943a.98.98 0 0 0 1.625.737L8.688 12H12.5A2.5 2.5 0 0 0 15 9.5Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 1,
            name: "Chatbots",
            description:
              "Easily integrate with chatbot platforms like Rasa or Dialogflow to reduce the workload of your agents",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M12 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm3.5-4a.5.5 0 0 0-1 0V3h-3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h7A1.5 1.5 0 0 0 15 8.5v-4A1.5 1.5 0 0 0 13.5 3h-3v-.5ZM6.5 4h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm3.75 13.998c2.616-.033 4.195-.595 5.122-1.44c.875-.8 1.089-1.777 1.123-2.556h.005v-.69a1.81 1.81 0 0 0-1.81-1.809H11.5V11.5h-3v.003H5.31c-1 0-1.81.81-1.81 1.81v.689h.005c.034.78.248 1.757 1.123 2.555c.927.846 2.506 1.408 5.122 1.441V18h.5v-.002Zm-4.94-5.495h9.38a.81.81 0 0 1 .81.81v.437c0 .69-.131 1.456-.802 2.069C14.01 16.446 12.66 17 10 17c-2.66 0-4.01-.554-4.698-1.181c-.67-.613-.802-1.38-.802-2.069v-.438a.81.81 0 0 1 .81-.809Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 1,
            name: "Automations",
            description:
              "Avoid repetitive tasks by automating your workflows and run your business on auto-pilot",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4.5 11a8.5 8.5 0 1 1 8.5 8.5V21c5.523 0 10-4.477 10-10S18.523 1 13 1S3 5.477 3 11c0 .206.006.41.018.614A2.737 2.737 0 0 1 4.5 11.01V11Zm8.493-5.352a.75.75 0 0 0-1.493.102v6l.007.102a.75.75 0 0 0 .743.648h4l.102-.007A.75.75 0 0 0 16.25 11H13V5.75l-.007-.102ZM8.25 13.5h-3.5a.25.25 0 0 0-.25.25V15h4v-1.25a.25.25 0 0 0-.25-.25ZM3 15v-1.25c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75V15h.5a1.5 1.5 0 0 1 1.5 1.5V18h-2v-.5a.5.5 0 0 0-1 0v.5H4v-.5a.5.5 0 0 0-1 0v.5H1v-1.5A1.5 1.5 0 0 1 2.5 15H3Zm6 4.5V19H4v.5a.5.5 0 0 1-1 0V19H1v2.5A1.5 1.5 0 0 0 2.5 23h8a1.5 1.5 0 0 0 1.5-1.5V19h-2v.5a.5.5 0 0 1-1 0Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 1,
            name: "Mobile apps",
            description:
              "Don't miss out on the new customers, download our mobile apps and talk to your customers easily",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M7.5 4a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-5ZM7 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5ZM9.5 15a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 1,
            name: "Integrations",
            description: "Super charge your workflow with integrations",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M6.19 2.77c.131-.456.548-.77 1.022-.77h5.25c.725 0 1.237.71 1.007 1.398l-.002.008L12.205 7h2.564c.947 0 1.407 1.144.767 1.811l-.004.004l-8.676 8.858c-.755.782-2.06.06-1.796-.996l1.17-4.679H4.963a1.062 1.062 0 0 1-1.022-1.354l2.25-7.873ZM7.213 3a.062.062 0 0 0-.06.045l-2.25 7.874c-.01.04.02.08.06.08H6.87a.5.5 0 0 1 .485.62l-1.325 5.3a.086.086 0 0 0-.003.03c0 .004.002.008.003.011c.004.008.013.02.03.03c.018.01.034.01.042.01a.03.03 0 0 0 .01-.004a.087.087 0 0 0 .024-.018l.004-.004l8.675-8.856a.056.056 0 0 0 .017-.032a.084.084 0 0 0-.007-.044a.079.079 0 0 0-.025-.034c-.005-.004-.013-.008-.03-.008H11.5a.5.5 0 0 1-.472-.666l1.493-4.254a.062.062 0 0 0-.06-.08H7.212Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 1,
            name: "Pre-Chat Form",
            description:
              "Add a customisable chat form before a user initiates a chat",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 28 28"
              >
                <g fill="currentColor">
                  <path d="M22.993 6.008A3.243 3.243 0 0 1 24.5 8.75v10.5c0 2.9-2.35 5.25-5.25 5.25H8.75a3.247 3.247 0 0 1-2.744-1.508l.122.006l.122.002h13A3.75 3.75 0 0 0 23 19.25v-13a4.32 4.32 0 0 0-.007-.242ZM6 14.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0Zm2.5-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z"></path>
                  <path d="M13 14.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm-7-5a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 6 9.25Z"></path>
                  <path d="M18.75 3A3.25 3.25 0 0 1 22 6.25v12.5A3.25 3.25 0 0 1 18.75 22H6.25A3.25 3.25 0 0 1 3 18.75V6.25A3.25 3.25 0 0 1 6.25 3h12.5Zm0 17.5a1.749 1.749 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v12.5a1.747 1.747 0 0 0 1.75 1.75h12.5Z"></path>
                </g>
              </svg>
            ),
          },
        ],
      },
      {
        id: 2,
        name: "Manage",
        description: "Manage your workflow with ease",
        href: "##",
        icon: <MangeIcon />,
        children: [
          {
            subMenuItemId: 2,
            name: "Labels",
            description: "Add labels to chats and keep it organized",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.5 6.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm-6.992-3.602A3.25 3.25 0 0 1 12.75 2h5.499A2.75 2.75 0 0 1 21 4.75v4.953a3.25 3.25 0 0 1-.97 2.316l-6.946 6.835a2.25 2.25 0 0 1-3.166-.01l-6.256-6.226a2.25 2.25 0 0 1 .034-3.223l6.812-6.497Zm2.243.602c-.45 0-.883.173-1.208.484L4.73 10.48a.75.75 0 0 0-.011 1.075l6.257 6.226a.75.75 0 0 0 1.055.003l6.945-6.834a1.75 1.75 0 0 0 .523-1.247V4.75c0-.69-.56-1.25-1.25-1.25h-5.5Zm7.98 9.232l-1.475 1.451c-.04.055-.085.106-.134.155l-5.334 5.229a3.251 3.251 0 0 1-4.575-.013L7.282 17.63l-2.411-2.386a1.262 1.262 0 0 1-.107-.12l-1.63-1.621a2.75 2.75 0 0 0 .682 2.807l4.356 4.311a4.75 4.75 0 0 0 6.666.016l5.334-5.229a2.75 2.75 0 0 0 .69-2.813a4.215 4.215 0 0 1-.131.136Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 2,
            name: "Teams",
            description: "Create internal teams",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.5 3.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM4.5 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-.732 4C2.79 9 2 9.791 2 10.768v.36c0 .207 0 1.408.7 2.575c.548.91 1.477 1.727 2.975 2.093a2.777 2.777 0 0 1 1.062-1.335c-1.603-.171-2.361-.883-2.75-1.53c-.484-.806-.487-1.664-.487-1.806v-.357c0-.148.12-.268.268-.268H8.03A3.974 3.974 0 0 1 8.535 9H3.768Zm11.697 0c.261.452.437.959.504 1.5h4.263c.148 0 .268.12.268.268v.357c0 .142-.003 1-.487 1.805c-.389.648-1.147 1.36-2.75 1.531c.48.32.856.786 1.062 1.335c1.498-.366 2.427-1.183 2.974-2.093c.701-1.167.701-2.367.701-2.576v-.36C22 9.792 21.209 9 20.232 9h-4.767ZM15 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm1.5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM12 9.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM9 11a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-2.5 5.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576v-.36Zm1.768-.268a.268.268 0 0 0-.268.268v.357c0 .142.003 1 .487 1.805c.446.743 1.377 1.57 3.513 1.57s3.067-.827 3.513-1.57c.484-.805.487-1.663.487-1.805v-.357a.268.268 0 0 0-.268-.268H8.268Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 2,
            name: "Contact Notes",
            description: "Add notes to contacts",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 15c0-.35.06-.687.171-1H4.253a2.249 2.249 0 0 0-2.25 2.25v.577c0 .892.32 1.756.9 2.435c1.565 1.834 3.951 2.74 7.097 2.74c.398 0 .783-.015 1.157-.044A2.997 2.997 0 0 1 11 21v-.534c-.322.023-.655.035-1 .035c-2.739 0-4.705-.745-5.958-2.213a2.25 2.25 0 0 1-.54-1.461v-.578a.75.75 0 0 1 .75-.749H11V15ZM10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7ZM12 15a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-6Zm2.5 1a.5.5 0 1 0 0 1h6a.5.5 0 1 0 0-1h-6Zm0 3a.5.5 0 1 0 0 1h6a.5.5 0 1 0 0-1h-6Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 2,
            name: "Private Notes",
            description:
              "Privately discuss customer queries with your teammates",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M1.668 9.126a.5.5 0 0 1 .706.042l3.647 4.104L16.147 3.146a.5.5 0 1 1 .707.708l-10.5 10.5a.5.5 0 0 1-.728-.022l-4-4.5a.5.5 0 0 1 .042-.706ZM11 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 2,
            name: "Contact Segments",
            description: "Filter and group your contacts into segments",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M7 4.5c0 .171-.017.338-.05.5H10a1 1 0 0 1 1 1v2h-1a2 2 0 0 0-2 2v1H6a1 1 0 0 1-1-1V6.95a2.512 2.512 0 0 1-1 0V10a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2h3.05a2.512 2.512 0 0 1 0-1H10a1 1 0 0 1-1-1v-2h1a2 2 0 0 0 2-2V9h2a1 1 0 0 1 1 1v3.05a2.512 2.512 0 0 1 1 0V10a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2H6.95c.033.162.05.329.05.5ZM11 9v1a1 1 0 0 1-1 1H9v-1a1 1 0 0 1 1-1h1ZM6 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm0-11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 2,
            name: "Business Hours",
            description:
              "Let customers know you’re not available to answer their questions",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11Zm-2.646 5.147a.5.5 0 1 0-.707.707l2 2a.5.5 0 0 0 .707 0l4-4a.5.5 0 1 0-.707-.707L16.5 18.793l-1.646-1.646ZM12.023 14a6.47 6.47 0 0 0-.709 1.5H4.253a.749.749 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.22 2.214 5.957 2.214c.597 0 1.157-.035 1.68-.106c.246.495.553.954.912 1.367c-.795.16-1.66.24-2.592.24c-3.146 0-5.532-.906-7.098-2.74a3.75 3.75 0 0 1-.898-2.435v-.578A2.249 2.249 0 0 1 4.253 14h7.77ZM10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"
                ></path>
              </svg>
            ),
          },
        ],
      },
      {
        id: 3,
        name: "Analyse",
        description: "Analyse and monitor your data",
        href: "##",
        icon: <AnalyseIcon />,
        children: [
          {
            subMenuItemId: 3,
            name: "Live view",
            description: "Get realtimes insights about your support operations",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M4.353 4.334a.476.476 0 0 1 .673.01a.528.528 0 0 1-.011.742A6.978 6.978 0 0 0 3 10c0 1.99.83 3.786 2.164 5.06a.528.528 0 0 1 .023.753a.475.475 0 0 1-.662.02A7.978 7.978 0 0 1 2 10c0-2.214.9-4.218 2.353-5.666Zm10.632.752a.528.528 0 0 1-.01-.742a.476.476 0 0 1 .672-.01A7.975 7.975 0 0 1 18 10c0 2.3-.97 4.374-2.525 5.833a.475.475 0 0 1-.662-.02a.528.528 0 0 1 .023-.752A6.98 6.98 0 0 0 17 10a6.98 6.98 0 0 0-2.015-4.915ZM6.132 6.09a.464.464 0 0 1 .656.016c.208.208.187.55-.018.76A4.485 4.485 0 0 0 5.5 10c0 1.29.543 2.454 1.414 3.275c.22.207.25.561.035.776a.463.463 0 0 1-.638.028A5.486 5.486 0 0 1 4.5 10a5.48 5.48 0 0 1 1.632-3.91Zm7.098.776c-.205-.21-.226-.552-.018-.76a.464.464 0 0 1 .656-.016A5.483 5.483 0 0 1 15.5 10a5.486 5.486 0 0 1-1.81 4.08a.463.463 0 0 1-.64-.03c-.214-.214-.184-.568.036-.775A4.487 4.487 0 0 0 14.5 10a4.485 4.485 0 0 0-1.27-3.134ZM10 8.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 3,
            name: "Conversation Report",
            description: "Get details insights on your conversations",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M6 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H8v1.793L9.207 12H11v-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V13H9.207l-1.353 1.354a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708L7 10.793V9h-.5a.5.5 0 0 1-.5-.5v-2ZM2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 3,
            name: "Agent Report",
            description:
              "Track your agents’ performance, with auto-updating reports",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-1.991 5A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.41 0 .816-.019 1.21-.057a5.501 5.501 0 0 1-.618-.958C9.398 16.995 9.2 17 9 17c-1.735 0-3.257-.364-4.327-1.047C3.623 15.283 3 14.31 3 13c0-.553.448-1 1.009-1h5.59c.184-.358.405-.693.658-1H4.01Zm9.866 1.5a.625.625 0 1 1 1.25 0a.625.625 0 0 1-1.25 0Zm1.125 4a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0v2Zm-5-2a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0Zm1 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 3,
            name: "Label Reports",
            description:
              "See which labels get the most conversations, and how long it takes to resolve them. ",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.5 6.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm-6.992-3.602A3.25 3.25 0 0 1 12.75 2h5.499A2.75 2.75 0 0 1 21 4.75v4.953a3.25 3.25 0 0 1-.97 2.316l-6.946 6.835a2.25 2.25 0 0 1-3.166-.01l-6.256-6.226a2.25 2.25 0 0 1 .034-3.223l6.812-6.497Zm2.243.602c-.45 0-.883.173-1.208.484L4.73 10.48a.75.75 0 0 0-.011 1.075l6.257 6.226a.75.75 0 0 0 1.055.003l6.945-6.834a1.75 1.75 0 0 0 .523-1.247V4.75c0-.69-.56-1.25-1.25-1.25h-5.5Zm7.98 9.232l-1.475 1.451c-.04.055-.085.106-.134.155l-5.334 5.229a3.251 3.251 0 0 1-4.575-.013L7.282 17.63l-2.411-2.386a1.262 1.262 0 0 1-.107-.12l-1.63-1.621a2.75 2.75 0 0 0 .682 2.807l4.356 4.311a4.75 4.75 0 0 0 6.666.016l5.334-5.229a2.75 2.75 0 0 0 .69-2.813a4.215 4.215 0 0 1-.131.136Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 3,
            name: "CSAT Reports",
            description: "Get reports on how customers respond to your chat",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.25 10a1.25 1.25 0 1 0-2.499 0a1.25 1.25 0 0 0 2.499 0Zm6 0a1.25 1.25 0 1 0-2.499 0a1.25 1.25 0 0 0 2.499 0Zm-6.114 5.106a.75.75 0 0 0-.772 1.286c.767.46 1.72.67 2.636.67c.916 0 1.87-.21 2.636-.67a.75.75 0 1 0-.772-1.286c-.483.29-1.154.456-1.864.456c-.71 0-1.38-.166-1.864-.456ZM22.002 12c0-5.524-4.478-10.002-10.002-10.002C6.476 1.998 2 6.476 2 12c-.001 5.523 4.476 10 10 10s10.002-4.478 10.002-10.001ZM3.499 12a8.502 8.502 0 1 1 17.003 0a8.502 8.502 0 0 1-17.003 0Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 3,
            name: "Inbox Reports",
            description: "Get insights into your inboxes",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  d="M6.189 10.72A6.253 6.253 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75V18.21a4.01 4.01 0 0 0 2.5.165V35.75a3.75 3.75 0 0 0 3.75 3.75h23.5a3.75 3.75 0 0 0 3.75-3.75v-23.5a3.75 3.75 0 0 0-3.75-3.75h-23.5a3.75 3.75 0 0 0-3.427 2.224A3.993 3.993 0 0 0 7.5 10.5c-.46 0-.9.077-1.311.22ZM6 12.5c-.607.456-1 1.182-1 2A2.496 2.496 0 0 0 7.5 17A2.5 2.5 0 1 0 6 12.5ZM17.25 19a1.25 1.25 0 1 0 0 2.5h13.5a1.25 1.25 0 1 0 0-2.5h-13.5ZM16 27.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 3,
            name: "Team Reports",
            description: "Analyse how each of your teams is performing",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M8.5 4.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Zm4.5 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-11 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0ZM5 15c.033 0 .067 0 .1-.002c.068.338.171.665.304.975A3 3 0 0 1 2 13V9.25C2 8.56 2.56 8 3.25 8h2.129a2.237 2.237 0 0 0-.365 1H3.25a.25.25 0 0 0-.25.25V13a2 2 0 0 0 2 2Zm12-5.5a2.5 2.5 0 0 1 .958 1.542l.042.008v-1.8C18 8.56 17.44 8 16.75 8h-2.129c.196.292.325.633.365 1h1.764a.25.25 0 0 1 .25.25v.25Zm-1.5.5h-2a1.5 1.5 0 0 0-1.5 1.5v.5h-.5a1.5 1.5 0 0 0-1.5 1.5V15h2v-.5a.5.5 0 0 1 1 0v.5h3v-.5a.5.5 0 0 1 1 0v.5h2v-1.5a1.5 1.5 0 0 0-1.5-1.5H17v-.5a1.5 1.5 0 0 0-1.5-1.5ZM7.25 9a.25.25 0 0 0-.25.25V14c0 1.306.835 2.418 2 2.83v.67c0 .13.01.257.029.381A4.002 4.002 0 0 1 6 14V9.25C6 8.56 6.56 8 7.25 8h5.5c.605 0 1.11.43 1.225 1H7.25ZM13 12v-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5h-3Zm4 4v.5a.5.5 0 0 1-1 0V16h-3v.5a.5.5 0 0 1-1 0V16h-2v1.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V16h-2Z"
                ></path>
              </svg>
            ),
          },
        ],
      },
      {
        id: 4,
        name: "Productivity",
        description: "Become extremely productive",
        href: "##",
        icon: <ProductivityIcon />,
        children: [
          {
            subMenuItemId: 4,
            name: "Keyboard Shortcuts",
            description: "Master Chatwoot with keyboard shortcuts",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.745 5a2.25 2.25 0 0 1 2.25 2.25v9.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 16.755V7.25A2.25 2.25 0 0 1 4.25 5h15.495Zm0 1.5H4.25a.75.75 0 0 0-.75.75v9.505c0 .414.336.75.75.75h15.495a.75.75 0 0 0 .75-.75V7.25a.75.75 0 0 0-.75-.75Zm-12.995 8h10.5a.75.75 0 0 1 .102 1.493L17.25 16H6.75a.75.75 0 0 1-.102-1.493l.102-.007h10.5h-10.5ZM16.5 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-5.995 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm6 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2ZM6 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm2.995 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 4,
            name: "Command Bar",
            description: "Use the command bar to perform actions",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.25 4.5C7.216 4.5 8 5.284 8 6.25V8H6.25a1.75 1.75 0 1 1 0-3.5ZM9.5 8V6.25A3.25 3.25 0 1 0 6.25 9.5H8v5H6.25a3.25 3.25 0 1 0 3.25 3.25V16h5v1.75a3.25 3.25 0 1 0 3.25-3.25H16v-5h1.75a3.25 3.25 0 1 0-3.25-3.25V8h-5Zm0 1.5h5v5h-5v-5ZM16 8V6.25A1.75 1.75 0 1 1 17.75 8H16Zm0 8h1.75A1.75 1.75 0 1 1 16 17.75V16Zm-8 0v1.75A1.75 1.75 0 1 1 6.25 16H8Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 4,
            name: "Bulk Actions",
            description: "Update multiple conversations at once",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M6 16a1 1 0 0 0 1 1h2.6c.183.358.404.693.657 1H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5.022a5.571 5.571 0 0 0-1 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v12Zm3.5-3.794a5.51 5.51 0 0 1 1-1.48v-3.52l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L9.5 7.207v4.999ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 4,
            name: "Canned Responses",
            description: "Save frequently sent messages as templates",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M2 4.5A2.5 2.5 0 0 1 4.5 2h9A2.5 2.5 0 0 1 16 4.5v3.535A3.53 3.53 0 0 0 15.5 8H15V4.5A1.5 1.5 0 0 0 13.5 3h-9A1.5 1.5 0 0 0 3 4.5v9A1.5 1.5 0 0 0 4.5 15H6v.5c0 .17.012.337.035.5H4.5A2.5 2.5 0 0 1 2 13.5v-9Zm11 3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5Zm-8-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm2 6A2.5 2.5 0 0 1 9.5 9h6a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-4ZM9.5 10a1.5 1.5 0 0 0-1.476 1.231l4.476 2.686l4.476-2.686A1.5 1.5 0 0 0 15.5 10h-6ZM8 15.5A1.5 1.5 0 0 0 9.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-3.117l-4.243 2.546a.5.5 0 0 1-.514 0L8 12.383V15.5Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 4,
            name: "Agent Capacity",
            description:
              "Set limits to auto-assigning conversations to your agents.",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M2.513 10.177a8.003 8.003 0 0 1 10.366-4.643l.57-.724a1.82 1.82 0 0 1 .08-.092A9.003 9.003 0 0 0 1.577 9.824a.5.5 0 1 0 .936.353Zm13.503-3.871a9.015 9.015 0 0 1 2.408 3.517a.5.5 0 0 1-.936.354a8.006 8.006 0 0 0-1.87-2.873l.264-.662l.134-.336Zm-6.015.194a6.5 6.5 0 0 1 1.897.281l-.671.856a5.503 5.503 0 0 0-6.553 3.987a.5.5 0 1 1-.969-.249A6.503 6.503 0 0 1 10.001 6.5Zm5 2.346l-.436 1.084c.344.51.604 1.082.762 1.695a.5.5 0 1 0 .969-.25A6.481 6.481 0 0 0 15 8.846ZM10 9l.16.003c-.288.368-.569.73-.833 1.073A3.001 3.001 0 0 0 7 13a.5.5 0 0 1-1 0a4 4 0 0 1 4-4Zm3.168 4.351l-.007.017A.5.5 0 0 0 14 13c0-.424-.065-.832-.187-1.215c-.23.563-.45 1.098-.644 1.566Zm.222-6.85l.612-.778l.232-.293l.037-.042a.5.5 0 0 1 .855.371l-.036.166l-.138.347a1207.076 1207.076 0 0 1-1.504 3.75a341.202 341.202 0 0 1-1.203 2.945c-.175.42-.33.786-.451 1.067a7.552 7.552 0 0 1-.277.593a1.751 1.751 0 0 1-3.033-1.75c.06-.106.202-.303.375-.538c.183-.246.422-.562.699-.923a335.76 335.76 0 0 1 1.949-2.515c.693-.887 1.374-1.754 1.883-2.4Zm-1.095 3.015c-.692.886-1.393 1.789-1.943 2.507c-.275.36-.511.672-.689.911a7.717 7.717 0 0 0-.313.442a.751.751 0 1 0 1.3.751c.027-.044.102-.205.227-.492c.119-.274.27-.634.444-1.052a342.472 342.472 0 0 0 1.549-3.801l-.575.734Zm2.83-3.757a.498.498 0 0 1-.034.166Z"
                ></path>
              </svg>
            ),
          },
        ],
      },
      {
        id: 5,
        name: "Integrations",
        description: "Connect with other services natively",
        href: "##",
        icon: <IntegrationsIcon />,
        children: [
          {
            subMenuItemId: 5,
            name: "WhatsApp",
            description:
              "Manage your WhatsApp business interactions from Chatwoot.",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 256 258"
              >
                <defs>
                  <linearGradient
                    id="iconifyVue1"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#1FAF38"></stop>
                    <stop offset="100%" stopColor="#60D669"></stop>
                  </linearGradient>
                  <linearGradient
                    id="iconifyVue2"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#F9F9F9"></stop>
                    <stop offset="100%" stopColor="#FFF"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#iconifyVue1)"
                  d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                ></path>
                <path
                  fill="url(#iconifyVue2)"
                  d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513l10.706-39.082Z"
                ></path>
                <path
                  fill="#FFF"
                  d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 5,
            name: "Twitter",
            description: "Manage your Twitter interactions from Chatwoot.",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 256 209"
              >
                <path
                  fill="#55acee"
                  d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 5,
            name: "Facebook",
            description: "Stay connected with your customers on Facebook.",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#1877F2"
                  d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                ></path>
                <path
                  fill="#FFF"
                  d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 5,
            name: "Instagram",
            description: "Stay connected with your customers on Instagram.",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 1536 1536"
              >
                <path
                  fill="currentColor"
                  d="M1024 768q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181zm138 0q0 164-115 279t-279 115t-279-115t-115-279t115-279t279-115t279 115t115 279zm108-410q0 38-27 65t-65 27t-65-27t-27-65t27-65t65-27t65 27t27 65zM768 138q-7 0-76.5-.5t-105.5 0t-96.5 3t-103 10T315 169q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103t-3 96.5t0 105.5t.5 76.5t-.5 76.5t0 105.5t3 96.5t10 103T169 1221q20 50 58 88t88 58q29 11 71.5 18.5t103 10t96.5 3t105.5 0t76.5-.5t76.5.5t105.5 0t96.5-3t103-10t71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103t3-96.5t0-105.5t-.5-76.5t.5-76.5t0-105.5t-3-96.5t-10-103T1367 315q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10t-96.5-3t-105.5 0t-76.5.5zm768 630q0 229-5 317q-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1085q-5-88-5-317t5-317q10-208 124-322T451 5q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 5,
            name: "Telegram",
            description:
              "Manage your Telegram customer interactions from Chatwoot.",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <defs>
                  <linearGradient
                    id="iconifyVue0"
                    x1="50%"
                    x2="50%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#2AABEE"></stop>
                    <stop offset="100%" stopColor="#229ED9"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#iconifyVue0)"
                  d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"
                ></path>
                <path
                  fill="#FFF"
                  d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 5,
            name: "Line",
            description:
              "Manage your Line customer interactions from Chatwoot.",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M25.817 13.151a.842.842 0 1 1 0 1.683h-2.339v1.5h2.339a.84.84 0 1 1 0 1.678H22.64a.84.84 0 0 1-.837-.839v-6.36c0-.463.375-.843.837-.843h3.183a.842.842 0 0 1-.005 1.682h-2.339v1.5zm-5.134 4.021a.845.845 0 0 1-.844.838a.85.85 0 0 1-.683-.333l-3.255-4.427v3.921a.839.839 0 1 1-1.678 0v-6.36c0-.359.235-.681.573-.796a.754.754 0 0 1 .26-.043c.26 0 .5.141.661.339l3.281 4.437v-3.937c0-.463.375-.843.839-.843s.844.38.844.843zm-7.656 0a.843.843 0 0 1-.844.839a.84.84 0 0 1-.833-.839v-6.36c0-.463.375-.843.839-.843c.463 0 .839.38.839.843zm-3.287.839H6.557a.846.846 0 0 1-.844-.839v-6.36c0-.463.38-.843.844-.843s.839.38.839.843v5.521H9.74a.839.839 0 1 1 0 1.678zM32 13.749C32 6.588 24.817.76 16 .76S0 6.588 0 13.749c0 6.417 5.693 11.792 13.38 12.813c.521.109 1.229.344 1.412.787c.161.4.104 1.02.052 1.443l-.219 1.359c-.063.401-.323 1.579 1.396.86c1.724-.719 9.224-5.437 12.583-9.303C30.901 19.193 32 16.609 32 13.749z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 5,
            name: "SMS",
            description: "Manage your SMS customer interactions from Chatwoot.",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.335 14.005h23.128m-23.128 6.291h16.027m-16.027 6.292h8.926M40.858 5.5H7.142a2.006 2.006 0 0 0-2 2v35l7.418-7.419h28.298a2.006 2.006 0 0 0 2-2V7.5a2.006 2.006 0 0 0-2-2Z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 5,
            name: "Email",
            description:
              "Manage your email customer interactions from Chatwoot.",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#96A9B2"
                  d="M511.824 425.007c1.941-5.245-220.916-173.519-220.916-173.519c-27.9-20.589-42.574-20.913-70.164 0c0 0-222.532 168.138-220.659 173.311l-.045.038c.023.045.06.076.091.117a48.482 48.482 0 0 0 8.119 14.157c1.473 1.786 3.248 3.282 4.955 4.837l-.083.064c.136.121.317.177.453.298c7.235 6.454 16.359 10.634 26.495 11.827c.159.019.287.102.446.121h.612c1.541.147 3.006.517 4.584.517h420.721c20.717 0 38.269-13.028 45.241-31.291c.083-.136.211-.234.287-.374l-.137-.103z"
                ></path>
                <path
                  fill="#B9C5C6"
                  d="M256.133 232.176L1.216 423.364V152.515c0-26.4 21.397-47.797 47.797-47.797h414.24c26.4 0 47.797 21.397 47.797 47.797v270.849L256.133 232.176z"
                ></path>
                <path
                  fill="#EDECE6"
                  d="m4.189 135.896l217.645 170.949c27.47 20.271 41.918 20.591 69.083 0L508.22 136.167c-3.77-6.834-9.414-12.233-15.869-16.538l2.989-2.342c-7.295-6.641-16.62-10.946-26.971-12.058l-424.455.015c-10.322 1.097-19.662 5.417-26.942 12.043l2.967 2.313c-6.38 4.245-11.972 9.551-15.75 16.296z"
                ></path>
                <path
                  fill="#DCE2E2"
                  d="M4.118 136.254C2.207 141.419 221.63 307.099 221.63 307.099c27.47 20.271 41.918 20.591 69.083 0c0 0 219.103-165.546 217.258-170.64l.045-.037c-.022-.045-.059-.074-.089-.115a47.732 47.732 0 0 0-7.994-13.939c-1.45-1.759-3.198-3.231-4.878-4.763l.082-.063c-.134-.119-.312-.175-.446-.294c-7.124-6.354-16.107-10.47-26.086-11.645c-.156-.019-.283-.1-.439-.119h-.602c-1.517-.145-2.96-.509-4.514-.509H48.81c-20.398 0-37.68 12.828-44.543 30.809c-.082.134-.208.231-.283.368l.134.102z"
                ></path>
                <path
                  fill="#597B91"
                  d="M291.401 154.645h-38.632a6.155 6.155 0 0 0-6.155 6.155v21.722a6.155 6.155 0 0 0 6.155 6.155h31.415a6.155 6.155 0 0 1 6.155 6.155v11.616a6.155 6.155 0 0 1-6.155 6.155h-31.415a6.155 6.155 0 0 0-6.155 6.155v23.578a6.155 6.155 0 0 0 6.155 6.155h41.316a6.155 6.155 0 0 1 6.155 6.155v12.441a6.155 6.155 0 0 1-6.155 6.155h-75.76a6.155 6.155 0 0 1-6.155-6.155V136.461a6.155 6.155 0 0 1 6.155-6.155h74.81c3.749 0 6.627 3.322 6.092 7.033l-1.733 12.028a6.156 6.156 0 0 1-6.093 5.278z"
                ></path>
              </svg>
            ),
          },
          {
            subMenuItemId: 5,
            name: "Slack",
            description: "Answer your customer queries from Slack.",
            link: "Learn More → ",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon absolute h-6 w-6 text-woot"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#E01E5A"
                  d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82c-14.832 0-26.819-11.988-26.819-26.82c0-14.831 11.987-26.818 26.82-26.818H53.84v26.819Zm13.41 0c0-14.831 11.987-26.818 26.819-26.818c14.832 0 26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82v-67.047Z"
                ></path>
                <path
                  fill="#36C5F0"
                  d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819C67.25 11.987 79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82h-26.82Zm0 13.613c14.832 0 26.819 11.987 26.819 26.819c0 14.832-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818h67.25Z"
                ></path>
                <path
                  fill="#2EB67D"
                  d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82c14.832 0 26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55v-26.82Zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0c14.831 0 26.819 11.987 26.819 26.819v67.25Z"
                ></path>
                <path
                  fill="#ECB22E"
                  d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818c0 14.832-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55h26.819Zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819c0 14.831-11.988 26.819-26.82 26.819h-67.25Z"
                ></path>
              </svg>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Pricing",
    type: MenuItemType.LINK,
    href: "/pricing",
    children: [],
  },
  {
    id: 3,
    name: "Help Center",
    type: MenuItemType.LINK,
    href: "/helping",
    children: [],
  },
  {
    id: 4,
    name: "Resources",
    type: MenuItemType.RESOURCES,
    href: "",
    children: {
      categories: [
        {
          id: 0,
          name: "Resources",
          children: [
            {
              id: 0,
              name: "Blog",
              description:
                "Explore our learnings, stories, and tips about creating customer engagement strategies and building Chatwoot.",
              href: "/blog",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="icon absolute h-5 w-5 text-woot"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.828-5.828A2 2 0 0 0 12.172 2H6Zm-.5 2a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4Zm11.88 4.5H14a.5.5 0 0 1-.5-.5V4.62l3.88 3.88Z"
                  ></path>
                </svg>
              ),
              children: [],
            },
            {
              id: 0,
              name: "Changelog",
              description:
                "Stay updated with our monthly release notes. Learn about new features, bug fixes, and other changes in Chatwoot.",
              href: "/blog",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="icon absolute h-5 w-5 text-woot"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5.754 22.005a2.25 2.25 0 0 1-2.25-2.25L3.502 5.75a2.25 2.25 0 0 1 2.25-2.25l.747-.001l.001-.749a.75.75 0 0 1 .648-.743L7.25 2a.75.75 0 0 1 .743.648L8 2.75v.749h3V2.75a.75.75 0 0 1 .65-.743l.1-.007a.75.75 0 0 1 .744.648l.007.102v.749h2.997l.001-.749a.75.75 0 0 1 .648-.743L16.25 2a.75.75 0 0 1 .743.648L17 2.75v.749h.749a2.25 2.25 0 0 1 2.25 2.25l.001 11c0 .06-.007.12-.02.176l-.03.094l-.045.096l-.02.032a.685.685 0 0 1-.105.133l-4.504 4.505a.74.74 0 0 1-.085.073l.085-.073a.744.744 0 0 1-.105.087l-.088.052l-.116.047l-.114.026l-.053.006l-.055.002H5.754ZM17.748 5H5.742a.75.75 0 0 0-.74.75l.002 14.004c0 .415.336.75.75.75h8.24l.001-2.254a2.25 2.25 0 0 1 2.096-2.245l.154-.005H18.5V5.75a.75.75 0 0 0-.75-.75Zm-.31 12.5h-1.193a.75.75 0 0 0-.743.648l-.007.102v1.194l1.943-1.944ZM7.25 16h3.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 16h3.998H7.25Zm0-4h8.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 12h8.998H7.25Zm0-4h8.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 8h8.998H7.25Z"
                  ></path>
                </svg>
              ),
              children: [],
            },
            {
              id: 0,
              name: "Community",
              description:
                "Join the discussion on customer engagement, open-source, optimizing Chatwoot and more.",
              href: "/blog",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="icon absolute h-5 w-5 text-woot"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.5 3.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM4.5 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-.732 4C2.79 9 2 9.791 2 10.768v.36c0 .207 0 1.408.7 2.575c.548.91 1.477 1.727 2.975 2.093a2.777 2.777 0 0 1 1.062-1.335c-1.603-.171-2.361-.883-2.75-1.53c-.484-.806-.487-1.664-.487-1.806v-.357c0-.148.12-.268.268-.268H8.03A3.974 3.974 0 0 1 8.535 9H3.768Zm11.697 0c.261.452.437.959.504 1.5h4.263c.148 0 .268.12.268.268v.357c0 .142-.003 1-.487 1.805c-.389.648-1.147 1.36-2.75 1.531c.48.32.856.786 1.062 1.335c1.498-.366 2.427-1.183 2.974-2.093c.701-1.167.701-2.367.701-2.576v-.36C22 9.792 21.209 9 20.232 9h-4.767ZM15 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm1.5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM12 9.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM9 11a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-2.5 5.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576v-.36Zm1.768-.268a.268.268 0 0 0-.268.268v.357c0 .142.003 1 .487 1.805c.446.743 1.377 1.57 3.513 1.57s3.067-.827 3.513-1.57c.484-.805.487-1.663.487-1.805v-.357a.268.268 0 0 0-.268-.268H8.268Z"
                  ></path>
                </svg>
              ),
              children: [],
            },
          ],
        },
        {
          id: 0,
          name: "Other",
          children: [
            {
              id: 0,
              name: "Status",
              description:
                "Monitor Chatwoot's current status. See the real-time as well as historical data of our system's performance.",
              href: "/blog",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="icon absolute h-5 w-5 text-woot"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12.82 5.58l-.82.822l-.824-.824A5.375 5.375 0 0 0 2.249 11h1.605a3.876 3.876 0 0 1 6.261-4.36l1.358 1.357a.75.75 0 0 0 1.073-.012L13.88 6.64A3.88 3.88 0 0 1 20.149 11h1.605a5.38 5.38 0 0 0-8.934-5.42Zm-1.35 15.495L4.894 14.5h1.963c.051 0 .102-.003.152-.007L12 19.484l4.988-4.985h2.122l-6.58 6.576a.75.75 0 0 1-1.06 0ZM9.42 8.415a.75.75 0 0 0-1.348.014l-1.69 3.57H2.75a.75.75 0 0 0 0 1.5h4.107a.75.75 0 0 0 .678-.429l1.234-2.606l2.56 5.12a.75.75 0 0 0 1.279.105l2.698-3.736l1.13 1.29A.75.75 0 0 0 17 13.5h4.25a.75.75 0 0 0 0-1.5h-3.91l-1.526-1.743a.75.75 0 0 0-1.172.054l-2.525 3.496l-2.696-5.392Z"
                  ></path>
                </svg>
              ),
              children: [],
            },
            {
              id: 0,
              name: "Security",
              description:
                "Learn about our security practices. We adhere to the strictest standards in keeping your data secure & safe.",
              href: "/blog",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="icon absolute h-5 w-5 text-woot"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 5.75A.75.75 0 0 1 3.75 5c2.663 0 5.258-.943 7.8-2.85a.75.75 0 0 1 .9 0C14.992 4.057 17.587 5 20.25 5a.75.75 0 0 1 .75.75V11c0 .338-.014.67-.04.996a6.467 6.467 0 0 0-1.465-.684c.003-.103.005-.207.005-.312V6.478c-2.577-.152-5.08-1.09-7.5-2.8c-2.42 1.71-4.923 2.648-7.5 2.8V11c0 4.149 2.332 7.221 7.125 9.285a6.506 6.506 0 0 0 1.005 1.52l-.355.143a.75.75 0 0 1-.55 0C5.958 19.676 3 16 3 11V5.75ZM23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0Zm-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708Z"
                  ></path>
                </svg>
              ),
              children: [],
            },
            {
              id: 0,
              name: "Github",
              description:
                "We're open-source. Check out our GitHub profile for a tour of how we do it all.",
              href: "/blog",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="icon absolute h-5 w-5 text-woot"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  ></path>
                </svg>
              ),
              children: [],
            },
          ],
        },
      ],
      news: [
        {
          name: "Chatwoot Connect 1.0",
          description:
            "Chatwoot Connect is a regular virtual meetup hosted by the Chatwoot team. Watch the recording of the first edition here.",
          icon: "https://www-internal-blog.chatwoot.com/content/images/2022/08/Screenshot-2022-08-26-at-2.02.24-PM.jpg",
          link: "/videos/chatwoot-connect-1-0",
          subMenuItemId: 0,
        },
      ],
    },
  },
];

const Navigation = () => {
  return (
    <div className="flex items-center md:gap-x-12">
      <a
        href="/"
        className="router-link-active router-link-exact-active"
        aria-label="Home"
        aria-current="page"
      >
        <Logo className="h-6 sm:h-8 w-auto" />
      </a>
      <div className="hidden lg:flex items-center md:gap-x-6">
        {menu.map((item) => (
          <NavigationItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
