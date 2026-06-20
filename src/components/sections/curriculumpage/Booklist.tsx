import React, { useState, type JSX } from "react"

const Booklist: React.FC = () => {
  // Sample booklists
  const booklists = [
    // Group: I–V (5 Grades)
    {
      grade: "Class-I",
      group: "I-V",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Vaani Vinay", publisher: "New Saraswati House Pvt. Ltd." },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "Environmental Studies", publisher: "PM Publishers Pvt. Ltd." },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Knowledge Walk", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-II",
      group: "I-V",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Vaani Vinay", publisher: "New Saraswati House Pvt. Ltd." },
        { srno: "3", subject: "Punjabi", title: "Naaz Mhik (Part 0)", publisher: "Pacemaker Publication" },
        { srno: "4", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "5", subject: "EVS", title: "Environmental Studies", publisher: "PM Publishers Pvt. Ltd." },
        { srno: "6", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "7", subject: "G.K", title: "Knowledge Walk", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-III",
      group: "I-V",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Compacta Assignment", publisher: "Brajindra Book Company" },
        { srno: "2", subject: "Hindi", title: "Vaani Vinay", publisher: "New Saraswati House Pvt. Ltd." },
        { srno: "3", subject: "Punjabi", title: "Naaz Mhik (Part 1)", publisher: "Pacemaker Publication" },
        { srno: "4", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "5", subject: "Science", title: "Science for you", publisher: "Eduline Publisher (Sandeep Desai)" },
        { srno: "6", subject: "Social Science", title: "Millennium", publisher: "Millennium Books Ind. Ltd." },
        { srno: "7", subject: "Computer", title: "Computer Science (Tekie)", publisher: "UOLO Publisher" },
        { srno: "8", subject: "G.K", title: "Knowledge Walk", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-IV",
      group: "I-V",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Compacta Assignment", publisher: "Brajindra Book Company" },
        { srno: "2", subject: "Hindi", title: "Vaani Vinay", publisher: "New Saraswati House Pvt. Ltd." },
        { srno: "3", subject: "Punjabi", title: "Naaz Mhik (Part 4)", publisher: "Pacemaker Publication" },
        { srno: "4", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "5", subject: "Science", title: "Science for you", publisher: "Eduline Publisher (Sandeep Desai)" },
        { srno: "6", subject: "Social Science", title: "Millennium", publisher: "Millennium Books Ind. Ltd." },
        { srno: "7", subject: "Computer", title: "Computer Science (Tekie)", publisher: "UOLO Publisher" },
        { srno: "8", subject: "G.K", title: "Knowledge Walk", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-V",
      group: "I-V",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Compacta Assignment", publisher: "Brajindra Book Company" },
        { srno: "2", subject: "Hindi", title: "Vaani Vinay", publisher: "New Saraswati House Pvt. Ltd." },
        { srno: "3", subject: "Punjabi", title: "Naaz Mhik (Part 5)", publisher: "Pacemaker Publication" },
        { srno: "4", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "5", subject: "Science", title: "Science for you", publisher: "Eduline Publisher (Sandeep Desai)" },
        { srno: "6", subject: "Social Science", title: "Millennium", publisher: "Millennium Books Ind. Ltd." },
        { srno: "7", subject: "Computer", title: "Computer Science (Tekie)", publisher: "UOLO Publisher" },
        { srno: "8", subject: "G.K", title: "Knowledge Walk", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },

    // Group: VI–VIII (3 Grades)
    {
      grade: "Class-VI",
      group: "VI-VIII",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Compacta Assignment", publisher: "Brajindra Book Company" },
        { srno: "2", subject: "Hindi", title: "Vaani Vinay", publisher: "New Saraswati House Pvt. Ltd." },
        { srno: "3", subject: "Punjabi", title: "Naaz Mhik (Part 6)", publisher: "Pacemaker Publication" },
        { srno: "4", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "5", subject: "Science", title: "Science for you (Sandeep Desai)", publisher: "Eduline Publisher" },
        { srno: "6", subject: "Social Science", title: "Millennium", publisher: "Millennium Books Ind. Ltd." },
        { srno: "7", subject: "Computer", title: "Computer Science (Tekie)", publisher: "UOLO Publisher" },
        { srno: "8", subject: "G.K", title: "Knowledge Walk", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-VII",
      group: "VI-VIII",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Compacta Assignment", publisher: "Brajindra Book Company" },
        { srno: "2", subject: "Hindi", title: "Vaani Vinay", publisher: "New Saraswati House Pvt. Ltd." },
        { srno: "3", subject: "Punjabi", title: "Naaz Mhik (Part 7)", publisher: "Pacemaker Publication" },
        { srno: "4", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "5", subject: "Science", title: "Science for you (Preeti Desai)", publisher: "Eduline Publisher" },
        { srno: "6", subject: "Social Science", title: "Millennium", publisher: "Millennium Books Ind. Ltd." },
        { srno: "7", subject: "Computer", title: "Computer Science (Tekie)", publisher: "UOLO Publisher" },
        { srno: "8", subject: "G.K", title: "Knowledge Walk", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-VII",
      group: "VI-VIII",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Compacta Assignment", publisher: "Brajindra Book Company" },
        { srno: "2", subject: "Hindi", title: "Vaani Vinay", publisher: "New Saraswati House Pvt. Ltd." },
        { srno: "3", subject: "Punjabi", title: "Naaz Mhik (Part 8)", publisher: "Pacemaker Publication" },
        { srno: "4", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "5", subject: "Science", title: "Science for you (Preeti Desai)", publisher: "Eduline Publisher" },
        { srno: "6", subject: "Social Science", title: "Millennium", publisher: "Millennium Books Ind. Ltd." },
        { srno: "7", subject: "Computer", title: "Computer Science (Tekie)", publisher: "UOLO Publisher" },
        { srno: "8", subject: "G.K", title: "Knowledge Walk", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },

    // Group: IX–X
    {
      grade: "Class-IX",
      group: "IX-X",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "Literature Reader", publisher: "NCERT" },
        { srno: "1", subject: "English", title: "Main Course Book", publisher: "NCERT" },
        { srno: "2", subject: "Hindi", title: "Saparsh Part-1", publisher: "NCERT" },
        { srno: "2", subject: "Hindi", title: "Sanchayan Part-1", publisher: "NCERT" },
        { srno: "2", subject: "Hindi", title: "Hindi Vyakarana Darshika", publisher: "Saraswati Publications" },
        { srno: "3", subject: "Punjabi", title: "Vanangi-CBSE", publisher: "NCERT" },
        { srno: "3", subject: "Punjabi", title: "Sahit Mala-CBSE", publisher: "NCERT" },
        { srno: "3", subject: "Punjabi", title: "Punjabi Vyakarana Ate Likhit Rachna", publisher: "Narinder Dugal (CBSE)" },
        { srno: "4", subject: "Maths", title: "Textbook for Class IX", publisher: "NCERT" },
        { srno: "5", subject: "Science", title: "Textbook for Class IX", publisher: "NCERT" },
        { srno: "6", subject: "Social Studies", title: "Democratic Politics-I Textbook in Political Science Contemporary", publisher: "NCERT" },
        { srno: "6", subject: "Social Studies", title: "India-I Textbook in Geography for Class IX", publisher: "NCERT" },
        { srno: "6", subject: "Social Studies", title: "India and the contemporary World-I Textbook in History for class IX", publisher: "NCERT" },
        { srno: "6", subject: "Social Studies", title: "Economics Textbook for class IX", publisher: "NCERT" },
        { srno: "7", subject: "Information Technology ", title: "Essential of Information Technology ", publisher: "SCS (Preeti Arora)" },
      ],
    },
    {
      grade: "Class-X",
      group: "IX-X",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "Literature Reader", publisher: "NCERT" },
        { srno: "1", subject: "English", title: "Main Course Book", publisher: "NCERT" },
        { srno: "2", subject: "Hindi", title: "Saparsh Part-1", publisher: "NCERT" },
        { srno: "2", subject: "Hindi", title: "Sanchayan Part-1", publisher: "NCERT" },
        { srno: "2", subject: "Hindi", title: "Hindi Vyakarana Darshika", publisher: "Saraswati Publications" },
        { srno: "3", subject: "Punjabi", title: "Vanangi-CBSE", publisher: "NCERT" },
        { srno: "3", subject: "Punjabi", title: "Sahit Mala-CBSE", publisher: "NCERT" },
        { srno: "4", subject: "Maths", title: "Mathematics 10 Textbook", publisher: "NCERT" },
        { srno: "5", subject: "Science", title: "Science 10", publisher: "NCERT" },
        { srno: "6", subject: "Social Studies", title: "Democratic Politics-II", publisher: "NCERT" },
        { srno: "6", subject: "Social Studies", title: "Social Science Contemporary", publisher: "NCERT" },
        { srno: "6", subject: "Social Studies", title: "India and the contemporary World-II", publisher: "NCERT" },
        { srno: "6", subject: "Social Studies", title: "Understanding Economic development 1", publisher: "NCERT" },
        { srno: "7", subject: "Information Technology ", title: "Essential of Information Technology ", publisher: "SCS (Preeti Arora)" },
      ],
    },

    // Group: XI–XII
    {
      grade: "Class-XI",
      group: "XI-XII",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "Hornbill Text book XI (Core Course)", publisher: "NCERT" },
        { srno: "1", subject: "English", title: "Snapshots Supplement Reader English XI (Core Course)", publisher: "NCERT" },
        { srno: "2", subject: "Hindi", title: "Vetan Part-1", publisher: "NCERT" },
        { srno: "2", subject: "Hindi", title: "Aaroha Part-1", publisher: "NCERT" },
        { srno: "2", subject: "Hindi", title: "Rachnatmak Abhivyakti Avam Madhyam", publisher: "NCERT" },
        { srno: "3", subject: "Maths", title: "Textbook for Class XI", publisher: "NCERT" },
        { srno: "4", subject: "Chemistry", title: "Textbook for Class XI (Part 1 & 2)", publisher: "NCERT" },
        { srno: "5", subject: "Physics", title: "Textbook for Class XI (Part 1 & 2)", publisher: "NCERT" },
        { srno: "6", subject: "Biology", title: "Textbook for Class XI", publisher: "NCERT" },
        { srno: "7", subject: "Business Studies", title: "Textbook for Class XI", publisher: "NCERT" },
        { srno: "8", subject: "Economics", title: "Statistics for economics Textbook Class XI", publisher: "NCERT" },
        { srno: "8", subject: "Economics", title: "Micro Economics Text book class XI", publisher: "NCERT" },
        { srno: "9", subject: "Accountancy", title: "Financial Accounting Part 1&2", publisher: "NCERT" },
        { srno: "10", subject: "Geography", title: "India: Physical Environment", publisher: "NCERT" },
        { srno: "10", subject: "Geography", title: "Fundamentals of Physical Geography", publisher: "NCERT" },
        { srno: "11", subject: "History", title: "Themes in World History", publisher: "NCERT" },
        { srno: "12", subject: "Sociology", title: "Introducing Sociology Text Book", publisher: "NCERT" },
        { srno: "12", subject: "Sociology", title: "Understanding Society Text book", publisher: "NCERT" },
        { srno: "13", subject: "Political Science", title: "Political Theory Text Book", publisher: "NCERT" },
        { srno: "13", subject: "Political Science", title: "Indian Constitution at Work", publisher: "NCERT" },
        { srno: "14", subject: "Psychology", title: "Textbook for Class XI", publisher: "NCERT" },
        { srno: "15", subject: "Painting", title: "Painting", publisher: "NCERT" },
        { srno: "16", subject: "Entrepreneurship", title: "Entrepreneurship", publisher: "NCERT" },
        { srno: "17", subject: "Physical Education", title: "Physical Education", publisher: "NCERT" },
        { srno: "18", subject: "Computer Science", title: "Computer Science (Python)", publisher: "NCERT" },
        { srno: "18", subject: "Computer Science", title: "Computer Science (Python)", publisher: "SCS (Preeti Arora)" },
        { srno: "19", subject: "Mass Media Studies", title: "Mass Media Studies", publisher: "NCERT" },
        { srno: "20", subject: "Business Administration", title: "Business Administration", publisher: "NCERT" },
        { srno: "21", subject: "Artificial Intelligence", title: "AI", publisher: "Sultan Chand Publications" },
        { srno: "22", subject: "Information Technology", title: "Information Technology", publisher: "NCERT" },
        { srno: "23", subject: "Informatics Practices", title: "IP", publisher: "SCS (Preeti Arora)" },
      ],
    },
    {
      grade: "Class-XII",
      group: "XI-XII",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "Flamingo Text Book (Core Course)", publisher: "NCERT" },
        { srno: "1", subject: "English", title: "Vistas Supplement Reader (Core Course)", publisher: "NCERT" },
        { srno: "2", subject: "Hindi", title: "Vetan Part-2", publisher: "NCERT" },
        { srno: "2", subject: "Hindi", title: "Aaroha Part-2", publisher: "NCERT" },
        { srno: "2", subject: "Hindi", title: "Rachnatmak Abhivyakti Avam Madhyam", publisher: "NCERT" },
        { srno: "3", subject: "Maths", title: "Textbook for Class XII (Part 1 & 2)", publisher: "NCERT" },
        { srno: "4", subject: "Chemistry", title: "Textbook for Class XII (Part 1 & 2)", publisher: "NCERT" },
        { srno: "5", subject: "Physics", title: "Textbook for Class XII (Part 1 & 2)", publisher: "NCERT" },
        { srno: "6", subject: "Biology", title: "Textbook for Class XII", publisher: "NCERT" },
        { srno: "7", subject: "Business Studies", title: "Textbook for Class XII", publisher: "NCERT" },
        { srno: "7", subject: "Business Studies", title: "Principles and Functions of Management Part-1", publisher: "NCERT" },
        { srno: "7", subject: "Business Studies", title: "Business Finance and Marketing Part-2", publisher: "NCERT" },
        { srno: "8", subject: "Economics", title: "Indian Economy Development", publisher: "NCERT" },
        { srno: "8", subject: "Economics", title: "Introductory Macro Economy", publisher: "NCERT" },
        { srno: "9", subject: "Accountancy", title: "Company accounts and analysis of financial statement", publisher: "NCERT" },
        { srno: "9", subject: "Accountancy", title: "Not for profit organisation and partnership account", publisher: "NCERT" },
        { srno: "10", subject: "Geography", title: "Indian people and economy text book in Geography ", publisher: "NCERT" },
        { srno: "10", subject: "Geography", title: "Fundamentals of Human Geography", publisher: "NCERT" },
        { srno: "11", subject: "History", title: "Themes in World History", publisher: "NCERT" },
        { srno: "12", subject: "Sociology", title: "Indian Society Text Book", publisher: "NCERT" },
        { srno: "12", subject: "Sociology", title: "Social change and development in India Text book", publisher: "NCERT" },
        { srno: "13", subject: "Political Science", title: "Contemporary World Indian Politics", publisher: "NCERT" },
        { srno: "14", subject: "Psychology", title: "Textbook for Class XII", publisher: "NCERT" },
        { srno: "15", subject: "Painting", title: "Painting (C K Luthra)", publisher: "NCERT" },
        { srno: "16", subject: "Entrepreneurship", title: "Entrepreneurship", publisher: "NCERT" },
        { srno: "17", subject: "Physical Education", title: "Physical Education", publisher: "NCERT" },
        { srno: "18", subject: "Computer Science", title: "Computer Science (Python)", publisher: "NCERT" },
        { srno: "18", subject: "Computer Science", title: "Computer Science (Python)", publisher: "SCS (Preeti Arora)" },
        { srno: "19", subject: "Mass Media Studies", title: "Mass Media Studies", publisher: "NCERT" },
        { srno: "20", subject: "Business Administration", title: "Business Administration", publisher: "NCERT" },
        { srno: "21", subject: "Artificial Intelligence", title: "Decoding Artificial Intelligence ", publisher: "Sultan Chand Publications" },
        { srno: "22", subject: "Information Technology", title: "Information Technology", publisher: "NCERT" },
        { srno: "23", subject: "Informatics Practices", title: "IP", publisher: "SCS (Preeti Arora)" },
      ],
    },
  ]

  const groups = ["I-V", "VI-VIII", "IX-X", "XI-XII"]
  const [activeTab, setActiveTab] = useState("I-V")

  const currentBooklists = booklists.filter((b) => b.group === activeTab)

  return (
    <section id="booklist" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            MCS Learning <span className="relative inline-block">Resources
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute -bottom-4"
              />
            </span>{" "} and Booklist
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Find the complete list of prescribed textbooks and reference materials for each grade level.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4 flex-wrap">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setActiveTab(group)}
              className={`px-6 py-2 rounded-full font-inter font-medium text-base ${activeTab === group ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                }`}
            >
              Grade {group}
            </button>
          ))}
        </div>

        {/* Tables for Selected Tab */}
        <div className="space-y-12">
          {currentBooklists.map((list, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="bg-primarydark px-5 py-4 flex flex-row justify-between items-center gap-3">
                <h3 className="text-white font-inter font-semibold text-base tracking-wide uppercase">{list.grade} Booklist</h3>
                <a
                  href={list.downloadLink}
                  className="text-primarydark bg-white px-4 py-2 text-sm font-inter font-semibold rounded hover:text-secondarydark"
                >
                  Download PDF
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 font-inter uppercase text-sm tracking-wide">
                    <tr>
                      <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left text-gray-500">Sr. No.</th>
                      <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left text-gray-500">Subject</th>
                      <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left text-gray-500">Title</th>
                      <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left text-gray-500">Publisher</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(() => {
                      const groupedBySubject: { [key: string]: { sr: string; title: string; publisher: string }[] } = {}

                      list.books.forEach((book) => {
                        if (!groupedBySubject[book.subject]) {
                          groupedBySubject[book.subject] = []
                        }
                        groupedBySubject[book.subject].push({
                          sr: book.srno,
                          title: book.title,
                          publisher: book.publisher,
                        })
                      })

                      const rows: JSX.Element[] = []
                      let globalIndex = 0 // ← GLOBAL index for alternate color pattern

                      for (const [subject, books] of Object.entries(groupedBySubject)) {
                        books.forEach((book, index) => {
                          const isEven = globalIndex % 2 === 0
                          rows.push(
                            <tr
                              key={`${subject}-${index}`}
                              className={`${isEven ? "bg-white" : "bg-gray-100"} hover:bg-blue-50 font-inter`}
                            >
                              {index === 0 && (
                                <>
                                  <td rowSpan={books.length} className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-left text-gray-700 align-top">
                                    {book.sr}
                                  </td>
                                  <td rowSpan={books.length} className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-left font-medium text-gray-900 align-top">
                                    {subject}
                                  </td>
                                </>
                              )}
                              <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-left font-medium text-gray-900">{book.title}</td>
                              <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-left text-gray-700">{book.publisher}</td>
                            </tr>
                          )
                          globalIndex++ // ← increment for each rendered row
                        })
                      }

                      return rows
                    })()}
                  </tbody>

                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Booklist
