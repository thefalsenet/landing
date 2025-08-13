import { Html, Head, Preview } from "@react-email/components"

interface FeedbackConfirmationEmailProps {
     name?: string
     rating?: number
     testimonial?: string
     allowPublicDisplay?: boolean
     isPreview?: boolean
}

export default function FeedbackConfirmationEmail({
     name = "John Doe",
     rating = 5,
     testimonial = "This platform has completely transformed how I discover and share books with my reading community!",
     allowPublicDisplay = true,
     isPreview = false,
}: FeedbackConfirmationEmailProps) {
     const emailContent = (
          <div style={{ margin: 0, padding: 0 }} bgcolor="#ffffff">
               <table
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                    width="100%"
                    bgcolor="#F5F8FA"
                    style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}
               >
                    <tbody>
                         <tr>
                              <td align="center" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}>
                                   <table
                                        align="center"
                                        width="448"
                                        style={{ width: "448px", padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}
                                        bgcolor="#ffffff"
                                        cellPadding="0"
                                        cellSpacing="0"
                                        border="0"
                                   >
                                        <tbody>
                                             <tr>
                                                  <td style={{ minWidth: "448px", padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}>
                                                       <img
                                                            src="https://pic.thefalse.net/logo.png"
                                                            style={{
                                                                 minWidth: "448px",
                                                                 height: "1px",
                                                                 margin: 0,
                                                                 padding: 0,
                                                                 display: "block",
                                                                 border: "none",
                                                                 outline: "none",
                                                            }}
                                                            alt=""
                                                       />
                                                  </td>
                                             </tr>
                                        </tbody>
                                   </table>
                              </td>
                         </tr>
                         <tr>
                              <td align="center" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}>
                                   <table
                                        align="center"
                                        width="448"
                                        style={{
                                             width: "448px",
                                             backgroundColor: "#ffffff",
                                             padding: 0,
                                             margin: 0,
                                             lineHeight: "1px",
                                             fontSize: "1px",
                                        }}
                                        bgcolor="#ffffff"
                                        cellPadding="0"
                                        cellSpacing="0"
                                        border="0"
                                   >
                                        <tbody>
                                             <tr>
                                                  <td
                                                       colSpan={3}
                                                       height="24"
                                                       style={{ height: "24px", padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}
                                                  >
                                                       &nbsp;
                                                  </td>
                                             </tr>
                                             <tr align="right">
                                                  <td width="24" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                                  <td align="right" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}>
                                                       <a
                                                            href="#"
                                                            style={{ textDecoration: "none", borderStyle: "none", border: 0, padding: 0, margin: 0 }}
                                                       >
                                                            <img
                                                                 width="32"
                                                                 align="right"
                                                                 src="https://pic.thefalse.net/logo.png"
                                                                 style={{
                                                                      width: "32px",
                                                                      margin: 0,
                                                                      padding: 0,
                                                                      display: "block",
                                                                      border: "none",
                                                                      outline: "none",
                                                                 }}
                                                                 alt="thefalse.net"
                                                            />
                                                       </a>
                                                  </td>
                                                  <td width="24" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                             </tr>
                                             <tr>
                                                  <td
                                                       colSpan={4}
                                                       height="24"
                                                       style={{ height: "24px", padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}
                                                  >
                                                       <img
                                                            width="1"
                                                            height="1"
                                                            style={{
                                                                 display: "block",
                                                                 margin: 0,
                                                                 padding: 0,
                                                                 border: "none",
                                                                 outline: "none",
                                                            }}
                                                            src="https://pic.thefalse.net/logo.png"
                                                            alt=""
                                                       />
                                                  </td>
                                             </tr>
                                        </tbody>
                                   </table>

                                   <table
                                        align="center"
                                        width="448"
                                        style={{
                                             width: "448px",
                                             backgroundColor: "#ffffff",
                                             padding: 0,
                                             margin: 0,
                                             lineHeight: "1px",
                                             fontSize: "1px",
                                        }}
                                        bgcolor="#ffffff"
                                        cellPadding="0"
                                        cellSpacing="0"
                                        border="0"
                                   >
                                        <tbody>
                                             <tr align="left">
                                                  <td width="24" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                                  <td align="left" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}>
                                                       <table
                                                            cellPadding="0"
                                                            cellSpacing="0"
                                                            border="0"
                                                            style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}
                                                       >
                                                            <tbody>
                                                                 <tr>
                                                                      <td
                                                                           align="left"
                                                                           style={{
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                lineHeight: "1px",
                                                                                fontSize: "1px",
                                                                                fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                fontSize: "24px",
                                                                                lineHeight: "32px",
                                                                                fontWeight: "bold",
                                                                                color: "#292f33",
                                                                                textAlign: "left",
                                                                                textDecoration: "none",
                                                                           }}
                                                                      >
                                                                           Thank you for your feedback!
                                                                      </td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td height="24" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td
                                                                           align="left"
                                                                           style={{
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                lineHeight: "1px",
                                                                                fontSize: "1px",
                                                                                fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                fontSize: "16px",
                                                                                lineHeight: "20px",
                                                                                fontWeight: "400",
                                                                                color: "#292f33",
                                                                                textAlign: "left",
                                                                                textDecoration: "none",
                                                                           }}
                                                                      >
                                                                           Dear {name},
                                                                      </td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td height="16" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td
                                                                           align="left"
                                                                           style={{
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                lineHeight: "1px",
                                                                                fontSize: "1px",
                                                                                fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                fontSize: "16px",
                                                                                lineHeight: "20px",
                                                                                fontWeight: "400",
                                                                                color: "#292f33",
                                                                                textAlign: "left",
                                                                                textDecoration: "none",
                                                                           }}
                                                                      >
                                                                           We've received your feedback and appreciate you taking the time to share your thoughts
                                                                           with us.
                                                                      </td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td height="24" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td
                                                                           align="left"
                                                                           style={{
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                lineHeight: "1px",
                                                                                fontSize: "1px",
                                                                                fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                fontSize: "16px",
                                                                                lineHeight: "16px",
                                                                                fontWeight: "400",
                                                                                color: "#292f33",
                                                                                textAlign: "left",
                                                                                textDecoration: "none",
                                                                           }}
                                                                      >
                                                                           <strong>Your feedback details:</strong>
                                                                      </td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td height="12" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td
                                                                           align="left"
                                                                           style={{
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                lineHeight: "1px",
                                                                                fontSize: "1px",
                                                                                fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                fontSize: "14px",
                                                                                lineHeight: "20px",
                                                                                fontWeight: "400",
                                                                                color: "#292f33",
                                                                                textAlign: "left",
                                                                                textDecoration: "none",
                                                                           }}
                                                                      >
                                                                           <strong>Your rating:</strong> {rating}/5 {"★".repeat(rating)}
                                                                           {"☆".repeat(5 - rating)}
                                                                      </td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td height="12" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td
                                                                           align="left"
                                                                           style={{
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                lineHeight: "1px",
                                                                                fontSize: "1px",
                                                                                fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                fontSize: "14px",
                                                                                lineHeight: "20px",
                                                                                fontWeight: "400",
                                                                                color: "#292f33",
                                                                                textAlign: "left",
                                                                                textDecoration: "none",
                                                                           }}
                                                                      >
                                                                           <strong>Your testimonial:</strong>
                                                                      </td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td height="8" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td
                                                                           align="left"
                                                                           style={{
                                                                                padding: "12px",
                                                                                margin: 0,
                                                                                lineHeight: "1px",
                                                                                fontSize: "1px",
                                                                                fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                fontSize: "14px",
                                                                                lineHeight: "20px",
                                                                                fontWeight: "400",
                                                                                color: "#292f33",
                                                                                textAlign: "left",
                                                                                textDecoration: "none",
                                                                                backgroundColor: "#f8f9fa",
                                                                                borderLeft: "3px solid #1da1f2",
                                                                           }}
                                                                      >
                                                                           "{testimonial}"
                                                                      </td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td height="16" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                                                 </tr>
                                                                 {allowPublicDisplay && (
                                                                      <>
                                                                           <tr>
                                                                                <td
                                                                                     height="16"
                                                                                     style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}
                                                                                ></td>
                                                                           </tr>
                                                                           <tr>
                                                                                <td
                                                                                     align="left"
                                                                                     style={{
                                                                                          padding: 0,
                                                                                          margin: 0,
                                                                                          lineHeight: "1px",
                                                                                          fontSize: "1px",
                                                                                          fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                          fontSize: "16px",
                                                                                          lineHeight: "20px",
                                                                                          fontWeight: "400",
                                                                                          color: "#1da1f2",
                                                                                          textAlign: "left",
                                                                                          textDecoration: "none",
                                                                                     }}
                                                                                >
                                                                                     ✓ Your testimonial will be displayed publicly on our website.
                                                                                </td>
                                                                           </tr>
                                                                      </>
                                                                 )}
                                                                 <tr>
                                                                      <td height="32" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td
                                                                           align="left"
                                                                           style={{
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                lineHeight: "1px",
                                                                                fontSize: "1px",
                                                                                fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                fontSize: "16px",
                                                                                lineHeight: "20px",
                                                                                fontWeight: "400",
                                                                                color: "#292f33",
                                                                                textAlign: "left",
                                                                                textDecoration: "none",
                                                                           }}
                                                                      >
                                                                           Best regards,
                                                                           <br />
                                                                           thefalse Team
                                                                      </td>
                                                                 </tr>
                                                                 <tr>
                                                                      <td height="36" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                                                 </tr>
                                                            </tbody>
                                                       </table>
                                                  </td>
                                                  <td width="24" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}></td>
                                             </tr>
                                        </tbody>
                                   </table>

                                   <table
                                        align="center"
                                        width="448"
                                        style={{
                                             width: "448px",
                                             backgroundColor: "#ffffff",
                                             padding: 0,
                                             margin: 0,
                                             lineHeight: "1px",
                                             fontSize: "1px",
                                        }}
                                        cellPadding="0"
                                        cellSpacing="0"
                                        border="0"
                                   >
                                        <tbody>
                                             <tr>
                                                  <td
                                                       height="36"
                                                       style={{ height: "36px", padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}
                                                  ></td>
                                             </tr>
                                             <tr>
                                                  <td align="center" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}>
                                                       <span
                                                            style={{
                                                                 fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                 fontSize: "12px",
                                                                 lineHeight: "16px",
                                                                 fontWeight: "400",
                                                                 color: "#8899a6",
                                                                 textAlign: "left",
                                                                 textDecoration: "none",
                                                            }}
                                                       >
                                                            <a
                                                                 href="https://thefalse.net/help"
                                                                 style={{
                                                                      textDecoration: "none",
                                                                      borderStyle: "none",
                                                                      border: 0,
                                                                      padding: 0,
                                                                      margin: 0,
                                                                      fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                      fontSize: "12px",
                                                                      lineHeight: "16px",
                                                                      fontWeight: "600",
                                                                      color: "#1da1f2",
                                                                      textAlign: "left",
                                                                 }}
                                                            >
                                                                 Help
                                                            </a>{" "}
                                                            &nbsp;|&nbsp;{" "}
                                                            <a
                                                                 href="https://thefalse.net/contact"
                                                                 style={{
                                                                      textDecoration: "none",
                                                                      borderStyle: "none",
                                                                      border: 0,
                                                                      padding: 0,
                                                                      margin: 0,
                                                                      fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                      fontSize: "12px",
                                                                      lineHeight: "16px",
                                                                      fontWeight: "600",
                                                                      color: "#1da1f2",
                                                                      textAlign: "left",
                                                                 }}
                                                            >
                                                                 Contact Us
                                                            </a>
                                                       </span>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td
                                                       height="12"
                                                       style={{
                                                            height: "12px",
                                                            lineHeight: "1px",
                                                            fontSize: "1px",
                                                            padding: 0,
                                                            margin: 0,
                                                       }}
                                                  ></td>
                                             </tr>
                                             <tr>
                                                  <td align="center" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}>
                                                       <span
                                                            style={{
                                                                 fontFamily: "'HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                 fontSize: "12px",
                                                                 lineHeight: "16px",
                                                                 fontWeight: "400",
                                                                 color: "#8899a6",
                                                                 textAlign: "left",
                                                                 textDecoration: "none",
                                                            }}
                                                       >
                                                            We sent this email to {name}
                                                       </span>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td
                                                       height="6"
                                                       style={{
                                                            height: "6px",
                                                            lineHeight: "1px",
                                                            fontSize: "1px",
                                                            padding: 0,
                                                            margin: 0,
                                                       }}
                                                  ></td>
                                             </tr>
                                             <tr>
                                                  <td align="center" style={{ padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}>
                                                       <span
                                                            style={{
                                                                 fontFamily: "'Helvetica Neue Light',Helvetica,Arial,sans-serif",
                                                                 fontSize: "12px",
                                                                 padding: "0px",
                                                                 margin: "0px",
                                                                 fontWeight: "normal",
                                                                 lineHeight: "16px",
                                                                 color: "#8899a6",
                                                                 textDecoration: "none",
                                                            }}
                                                       >
                                                            thefalse.net Corp. 2093 Philadelphia Pike #3222, Claymont, DE 19703
                                                       </span>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td
                                                       height="72"
                                                       style={{ height: "72px", padding: 0, margin: 0, lineHeight: "1px", fontSize: "1px" }}
                                                  ></td>
                                             </tr>
                                        </tbody>
                                   </table>
                              </td>
                         </tr>
                    </tbody>
               </table>
          </div>
     )

     if (isPreview) {
          return emailContent
     }

     return (
          <Html>
               <Head />
               <Preview>Thank you for your feedback! We've received your {rating}/5 rating and testimonial.</Preview>
               {emailContent}
          </Html>
     )
}
