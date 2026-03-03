import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Principal "mo:core/Principal";

actor {
  type Enquiry = {
    name : Text;
    phone : Text;
    message : Text;
  };

  let enquiries = List.empty<Enquiry>();

  let admin = Principal.fromText("2vxsx-fae");

  public shared ({ caller }) func submitEnquiry(name : Text, phone : Text, message : Text) : async () {
    let enquiry : Enquiry = {
      name;
      phone;
      message;
    };
    enquiries.add(enquiry);
  };

  public query ({ caller }) func getEnquiries() : async [Enquiry] {
    if (caller != admin) { Runtime.trap("Only admin can access all enquiries.") };
    enquiries.toArray();
  };
};
