import {
  FileText,
  Download,
  ArrowUpRight,
} from "lucide-react";

export type DocumentItem = {
  title: string;
  description: string;
  file: string;

  /* OPTIONAL */
  icon?: any;
};

type Props = {
  title?: string;
  subtitle?: string;
  content?: string;
  documents: DocumentItem[];
};

const ImportantDocuments = ({
  title = "Important Documents",
  subtitle = "Access important school resources, forms, policies, and downloadable documents.",
  content,
  documents,
}: Props) => {
  return (
    <section className="relative overflow-hidden bg-white py-4 sm:py-10 my-10">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-125 w-125 rounded-full bg-sky-200 blur-3xl opacity-40" />

      <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-blue-200 blur-3xl opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        {/* HEADER */}
        <div className="max-w-7xl">
          <h2 className="text-4xl sm:text-5xl font-outfit font-semibold leading-tight text-gray-900">
            {title}
          </h2>

          <p className="mt-8 max-w-7xl text-lg sm:text-xl text-gray-700 leading-relaxed">
            {subtitle}
          </p>

          <p className="mt-8 max-w-7xl text-lg sm:text-xl text-gray-700 leading-relaxed">
            {content}
          </p>
        </div>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {documents.map((item, index) => {
            const Icon = item.icon || FileText;

            return (
              <div
                key={index}
                className="group rounded-4xl border border-white/40 bg-white/70 backdrop-blur-xl p-5 xl:p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* ICON */}
                <div className="flex h-16 w-16 xl:h-20 xl:w-20 items-center justify-center rounded-2xl bg-sky-100">
                  <Icon className="h-8 w-8 xl:h-12 xl:w-12 text-primary" />
                </div>

                {/* CONTENT */}
                <div className="mt-8">
                  <h3 className="text-2xl xl:text-3xl font-poppins font-semibold leading-none text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-base xl:text-lg text-gray-600 leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {/* VIEW */}
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm xl:text-base font-inter font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
                  >
                    View Document

                    <ArrowUpRight className="h-4 w-4 xl:h-6 xl:w-6" />
                  </a>

                  {/* DOWNLOAD */}
                  {/* <a
                    href={item.file}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-sky-50"
                  >
                    Download

                    <Download className="h-4 w-4" />
                  </a> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImportantDocuments;