// Code generated by protoc-gen-go-pulsar. DO NOT EDIT.
package sigmoid

import (
	fmt "fmt"
	runtime "github.com/cosmos/cosmos-proto/runtime"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoiface "google.golang.org/protobuf/runtime/protoiface"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	io "io"
	reflect "reflect"
	sync "sync"
)

var (
	md_Request               protoreflect.MessageDescriptor
	fd_Request_senderAddress protoreflect.FieldDescriptor
	fd_Request_mintAddress   protoreflect.FieldDescriptor
	fd_Request_status        protoreflect.FieldDescriptor
	fd_Request_amount        protoreflect.FieldDescriptor
	fd_Request_timestamp     protoreflect.FieldDescriptor
)

func init() {
	file_sigmoid_sigmoid_request_proto_init()
	md_Request = File_sigmoid_sigmoid_request_proto.Messages().ByName("Request")
	fd_Request_senderAddress = md_Request.Fields().ByName("senderAddress")
	fd_Request_mintAddress = md_Request.Fields().ByName("mintAddress")
	fd_Request_status = md_Request.Fields().ByName("status")
	fd_Request_amount = md_Request.Fields().ByName("amount")
	fd_Request_timestamp = md_Request.Fields().ByName("timestamp")
}

var _ protoreflect.Message = (*fastReflection_Request)(nil)

type fastReflection_Request Request

func (x *Request) ProtoReflect() protoreflect.Message {
	return (*fastReflection_Request)(x)
}

func (x *Request) slowProtoReflect() protoreflect.Message {
	mi := &file_sigmoid_sigmoid_request_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

var _fastReflection_Request_messageType fastReflection_Request_messageType
var _ protoreflect.MessageType = fastReflection_Request_messageType{}

type fastReflection_Request_messageType struct{}

func (x fastReflection_Request_messageType) Zero() protoreflect.Message {
	return (*fastReflection_Request)(nil)
}
func (x fastReflection_Request_messageType) New() protoreflect.Message {
	return new(fastReflection_Request)
}
func (x fastReflection_Request_messageType) Descriptor() protoreflect.MessageDescriptor {
	return md_Request
}

// Descriptor returns message descriptor, which contains only the protobuf
// type information for the message.
func (x *fastReflection_Request) Descriptor() protoreflect.MessageDescriptor {
	return md_Request
}

// Type returns the message type, which encapsulates both Go and protobuf
// type information. If the Go type information is not needed,
// it is recommended that the message descriptor be used instead.
func (x *fastReflection_Request) Type() protoreflect.MessageType {
	return _fastReflection_Request_messageType
}

// New returns a newly allocated and mutable empty message.
func (x *fastReflection_Request) New() protoreflect.Message {
	return new(fastReflection_Request)
}

// Interface unwraps the message reflection interface and
// returns the underlying ProtoMessage interface.
func (x *fastReflection_Request) Interface() protoreflect.ProtoMessage {
	return (*Request)(x)
}

// Range iterates over every populated field in an undefined order,
// calling f for each field descriptor and value encountered.
// Range returns immediately if f returns false.
// While iterating, mutating operations may only be performed
// on the current field descriptor.
func (x *fastReflection_Request) Range(f func(protoreflect.FieldDescriptor, protoreflect.Value) bool) {
	if x.SenderAddress != "" {
		value := protoreflect.ValueOfString(x.SenderAddress)
		if !f(fd_Request_senderAddress, value) {
			return
		}
	}
	if x.MintAddress != "" {
		value := protoreflect.ValueOfString(x.MintAddress)
		if !f(fd_Request_mintAddress, value) {
			return
		}
	}
	if x.Status != uint64(0) {
		value := protoreflect.ValueOfUint64(x.Status)
		if !f(fd_Request_status, value) {
			return
		}
	}
	if x.Amount != uint64(0) {
		value := protoreflect.ValueOfUint64(x.Amount)
		if !f(fd_Request_amount, value) {
			return
		}
	}
	if x.Timestamp != uint64(0) {
		value := protoreflect.ValueOfUint64(x.Timestamp)
		if !f(fd_Request_timestamp, value) {
			return
		}
	}
}

// Has reports whether a field is populated.
//
// Some fields have the property of nullability where it is possible to
// distinguish between the default value of a field and whether the field
// was explicitly populated with the default value. Singular message fields,
// member fields of a oneof, and proto2 scalar fields are nullable. Such
// fields are populated only if explicitly set.
//
// In other cases (aside from the nullable cases above),
// a proto3 scalar field is populated if it contains a non-zero value, and
// a repeated field is populated if it is non-empty.
func (x *fastReflection_Request) Has(fd protoreflect.FieldDescriptor) bool {
	switch fd.FullName() {
	case "sigmoid.sigmoid.Request.senderAddress":
		return x.SenderAddress != ""
	case "sigmoid.sigmoid.Request.mintAddress":
		return x.MintAddress != ""
	case "sigmoid.sigmoid.Request.status":
		return x.Status != uint64(0)
	case "sigmoid.sigmoid.Request.amount":
		return x.Amount != uint64(0)
	case "sigmoid.sigmoid.Request.timestamp":
		return x.Timestamp != uint64(0)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: sigmoid.sigmoid.Request"))
		}
		panic(fmt.Errorf("message sigmoid.sigmoid.Request does not contain field %s", fd.FullName()))
	}
}

// Clear clears the field such that a subsequent Has call reports false.
//
// Clearing an extension field clears both the extension type and value
// associated with the given field number.
//
// Clear is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Request) Clear(fd protoreflect.FieldDescriptor) {
	switch fd.FullName() {
	case "sigmoid.sigmoid.Request.senderAddress":
		x.SenderAddress = ""
	case "sigmoid.sigmoid.Request.mintAddress":
		x.MintAddress = ""
	case "sigmoid.sigmoid.Request.status":
		x.Status = uint64(0)
	case "sigmoid.sigmoid.Request.amount":
		x.Amount = uint64(0)
	case "sigmoid.sigmoid.Request.timestamp":
		x.Timestamp = uint64(0)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: sigmoid.sigmoid.Request"))
		}
		panic(fmt.Errorf("message sigmoid.sigmoid.Request does not contain field %s", fd.FullName()))
	}
}

// Get retrieves the value for a field.
//
// For unpopulated scalars, it returns the default value, where
// the default value of a bytes scalar is guaranteed to be a copy.
// For unpopulated composite types, it returns an empty, read-only view
// of the value; to obtain a mutable reference, use Mutable.
func (x *fastReflection_Request) Get(descriptor protoreflect.FieldDescriptor) protoreflect.Value {
	switch descriptor.FullName() {
	case "sigmoid.sigmoid.Request.senderAddress":
		value := x.SenderAddress
		return protoreflect.ValueOfString(value)
	case "sigmoid.sigmoid.Request.mintAddress":
		value := x.MintAddress
		return protoreflect.ValueOfString(value)
	case "sigmoid.sigmoid.Request.status":
		value := x.Status
		return protoreflect.ValueOfUint64(value)
	case "sigmoid.sigmoid.Request.amount":
		value := x.Amount
		return protoreflect.ValueOfUint64(value)
	case "sigmoid.sigmoid.Request.timestamp":
		value := x.Timestamp
		return protoreflect.ValueOfUint64(value)
	default:
		if descriptor.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: sigmoid.sigmoid.Request"))
		}
		panic(fmt.Errorf("message sigmoid.sigmoid.Request does not contain field %s", descriptor.FullName()))
	}
}

// Set stores the value for a field.
//
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType.
// When setting a composite type, it is unspecified whether the stored value
// aliases the source's memory in any way. If the composite value is an
// empty, read-only value, then it panics.
//
// Set is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Request) Set(fd protoreflect.FieldDescriptor, value protoreflect.Value) {
	switch fd.FullName() {
	case "sigmoid.sigmoid.Request.senderAddress":
		x.SenderAddress = value.Interface().(string)
	case "sigmoid.sigmoid.Request.mintAddress":
		x.MintAddress = value.Interface().(string)
	case "sigmoid.sigmoid.Request.status":
		x.Status = value.Uint()
	case "sigmoid.sigmoid.Request.amount":
		x.Amount = value.Uint()
	case "sigmoid.sigmoid.Request.timestamp":
		x.Timestamp = value.Uint()
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: sigmoid.sigmoid.Request"))
		}
		panic(fmt.Errorf("message sigmoid.sigmoid.Request does not contain field %s", fd.FullName()))
	}
}

// Mutable returns a mutable reference to a composite type.
//
// If the field is unpopulated, it may allocate a composite value.
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType
// if not already stored.
// It panics if the field does not contain a composite type.
//
// Mutable is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Request) Mutable(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "sigmoid.sigmoid.Request.senderAddress":
		panic(fmt.Errorf("field senderAddress of message sigmoid.sigmoid.Request is not mutable"))
	case "sigmoid.sigmoid.Request.mintAddress":
		panic(fmt.Errorf("field mintAddress of message sigmoid.sigmoid.Request is not mutable"))
	case "sigmoid.sigmoid.Request.status":
		panic(fmt.Errorf("field status of message sigmoid.sigmoid.Request is not mutable"))
	case "sigmoid.sigmoid.Request.amount":
		panic(fmt.Errorf("field amount of message sigmoid.sigmoid.Request is not mutable"))
	case "sigmoid.sigmoid.Request.timestamp":
		panic(fmt.Errorf("field timestamp of message sigmoid.sigmoid.Request is not mutable"))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: sigmoid.sigmoid.Request"))
		}
		panic(fmt.Errorf("message sigmoid.sigmoid.Request does not contain field %s", fd.FullName()))
	}
}

// NewField returns a new value that is assignable to the field
// for the given descriptor. For scalars, this returns the default value.
// For lists, maps, and messages, this returns a new, empty, mutable value.
func (x *fastReflection_Request) NewField(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "sigmoid.sigmoid.Request.senderAddress":
		return protoreflect.ValueOfString("")
	case "sigmoid.sigmoid.Request.mintAddress":
		return protoreflect.ValueOfString("")
	case "sigmoid.sigmoid.Request.status":
		return protoreflect.ValueOfUint64(uint64(0))
	case "sigmoid.sigmoid.Request.amount":
		return protoreflect.ValueOfUint64(uint64(0))
	case "sigmoid.sigmoid.Request.timestamp":
		return protoreflect.ValueOfUint64(uint64(0))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: sigmoid.sigmoid.Request"))
		}
		panic(fmt.Errorf("message sigmoid.sigmoid.Request does not contain field %s", fd.FullName()))
	}
}

// WhichOneof reports which field within the oneof is populated,
// returning nil if none are populated.
// It panics if the oneof descriptor does not belong to this message.
func (x *fastReflection_Request) WhichOneof(d protoreflect.OneofDescriptor) protoreflect.FieldDescriptor {
	switch d.FullName() {
	default:
		panic(fmt.Errorf("%s is not a oneof field in sigmoid.sigmoid.Request", d.FullName()))
	}
	panic("unreachable")
}

// GetUnknown retrieves the entire list of unknown fields.
// The caller may only mutate the contents of the RawFields
// if the mutated bytes are stored back into the message with SetUnknown.
func (x *fastReflection_Request) GetUnknown() protoreflect.RawFields {
	return x.unknownFields
}

// SetUnknown stores an entire list of unknown fields.
// The raw fields must be syntactically valid according to the wire format.
// An implementation may panic if this is not the case.
// Once stored, the caller must not mutate the content of the RawFields.
// An empty RawFields may be passed to clear the fields.
//
// SetUnknown is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Request) SetUnknown(fields protoreflect.RawFields) {
	x.unknownFields = fields
}

// IsValid reports whether the message is valid.
//
// An invalid message is an empty, read-only value.
//
// An invalid message often corresponds to a nil pointer of the concrete
// message type, but the details are implementation dependent.
// Validity is not part of the protobuf data model, and may not
// be preserved in marshaling or other operations.
func (x *fastReflection_Request) IsValid() bool {
	return x != nil
}

// ProtoMethods returns optional fastReflectionFeature-path implementations of various operations.
// This method may return nil.
//
// The returned methods type is identical to
// "google.golang.org/protobuf/runtime/protoiface".Methods.
// Consult the protoiface package documentation for details.
func (x *fastReflection_Request) ProtoMethods() *protoiface.Methods {
	size := func(input protoiface.SizeInput) protoiface.SizeOutput {
		x := input.Message.Interface().(*Request)
		if x == nil {
			return protoiface.SizeOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Size:              0,
			}
		}
		options := runtime.SizeInputToOptions(input)
		_ = options
		var n int
		var l int
		_ = l
		l = len(x.SenderAddress)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		l = len(x.MintAddress)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if x.Status != 0 {
			n += 1 + runtime.Sov(uint64(x.Status))
		}
		if x.Amount != 0 {
			n += 1 + runtime.Sov(uint64(x.Amount))
		}
		if x.Timestamp != 0 {
			n += 1 + runtime.Sov(uint64(x.Timestamp))
		}
		if x.unknownFields != nil {
			n += len(x.unknownFields)
		}
		return protoiface.SizeOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Size:              n,
		}
	}

	marshal := func(input protoiface.MarshalInput) (protoiface.MarshalOutput, error) {
		x := input.Message.Interface().(*Request)
		if x == nil {
			return protoiface.MarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Buf:               input.Buf,
			}, nil
		}
		options := runtime.MarshalInputToOptions(input)
		_ = options
		size := options.Size(x)
		dAtA := make([]byte, size)
		i := len(dAtA)
		_ = i
		var l int
		_ = l
		if x.unknownFields != nil {
			i -= len(x.unknownFields)
			copy(dAtA[i:], x.unknownFields)
		}
		if x.Timestamp != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.Timestamp))
			i--
			dAtA[i] = 0x28
		}
		if x.Amount != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.Amount))
			i--
			dAtA[i] = 0x20
		}
		if x.Status != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.Status))
			i--
			dAtA[i] = 0x18
		}
		if len(x.MintAddress) > 0 {
			i -= len(x.MintAddress)
			copy(dAtA[i:], x.MintAddress)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.MintAddress)))
			i--
			dAtA[i] = 0x12
		}
		if len(x.SenderAddress) > 0 {
			i -= len(x.SenderAddress)
			copy(dAtA[i:], x.SenderAddress)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.SenderAddress)))
			i--
			dAtA[i] = 0xa
		}
		if input.Buf != nil {
			input.Buf = append(input.Buf, dAtA...)
		} else {
			input.Buf = dAtA
		}
		return protoiface.MarshalOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Buf:               input.Buf,
		}, nil
	}
	unmarshal := func(input protoiface.UnmarshalInput) (protoiface.UnmarshalOutput, error) {
		x := input.Message.Interface().(*Request)
		if x == nil {
			return protoiface.UnmarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Flags:             input.Flags,
			}, nil
		}
		options := runtime.UnmarshalInputToOptions(input)
		_ = options
		dAtA := input.Buf
		l := len(dAtA)
		iNdEx := 0
		for iNdEx < l {
			preIndex := iNdEx
			var wire uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
				}
				if iNdEx >= l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				wire |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			fieldNum := int32(wire >> 3)
			wireType := int(wire & 0x7)
			if wireType == 4 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: Request: wiretype end group for non-group")
			}
			if fieldNum <= 0 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: Request: illegal tag %d (wire type %d)", fieldNum, wire)
			}
			switch fieldNum {
			case 1:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field SenderAddress", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.SenderAddress = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			case 2:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field MintAddress", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.MintAddress = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			case 3:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Status", wireType)
				}
				x.Status = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.Status |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			case 4:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
				}
				x.Amount = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.Amount |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			case 5:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Timestamp", wireType)
				}
				x.Timestamp = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.Timestamp |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			default:
				iNdEx = preIndex
				skippy, err := runtime.Skip(dAtA[iNdEx:])
				if err != nil {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, err
				}
				if (skippy < 0) || (iNdEx+skippy) < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if (iNdEx + skippy) > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				if !options.DiscardUnknown {
					x.unknownFields = append(x.unknownFields, dAtA[iNdEx:iNdEx+skippy]...)
				}
				iNdEx += skippy
			}
		}

		if iNdEx > l {
			return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
		}
		return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, nil
	}
	return &protoiface.Methods{
		NoUnkeyedLiterals: struct{}{},
		Flags:             protoiface.SupportMarshalDeterministic | protoiface.SupportUnmarshalDiscardUnknown,
		Size:              size,
		Marshal:           marshal,
		Unmarshal:         unmarshal,
		Merge:             nil,
		CheckInitialized:  nil,
	}
}

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.0
// 	protoc        (unknown)
// source: sigmoid/sigmoid/request.proto

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Request struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SenderAddress string `protobuf:"bytes,1,opt,name=senderAddress,proto3" json:"senderAddress,omitempty"`
	MintAddress   string `protobuf:"bytes,2,opt,name=mintAddress,proto3" json:"mintAddress,omitempty"`
	Status        uint64 `protobuf:"varint,3,opt,name=status,proto3" json:"status,omitempty"`
	Amount        uint64 `protobuf:"varint,4,opt,name=amount,proto3" json:"amount,omitempty"`
	Timestamp     uint64 `protobuf:"varint,5,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
}

func (x *Request) Reset() {
	*x = Request{}
	if protoimpl.UnsafeEnabled {
		mi := &file_sigmoid_sigmoid_request_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Request) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Request) ProtoMessage() {}

// Deprecated: Use Request.ProtoReflect.Descriptor instead.
func (*Request) Descriptor() ([]byte, []int) {
	return file_sigmoid_sigmoid_request_proto_rawDescGZIP(), []int{0}
}

func (x *Request) GetSenderAddress() string {
	if x != nil {
		return x.SenderAddress
	}
	return ""
}

func (x *Request) GetMintAddress() string {
	if x != nil {
		return x.MintAddress
	}
	return ""
}

func (x *Request) GetStatus() uint64 {
	if x != nil {
		return x.Status
	}
	return 0
}

func (x *Request) GetAmount() uint64 {
	if x != nil {
		return x.Amount
	}
	return 0
}

func (x *Request) GetTimestamp() uint64 {
	if x != nil {
		return x.Timestamp
	}
	return 0
}

var File_sigmoid_sigmoid_request_proto protoreflect.FileDescriptor

var file_sigmoid_sigmoid_request_proto_rawDesc = []byte{
	0x0a, 0x1d, 0x73, 0x69, 0x67, 0x6d, 0x6f, 0x69, 0x64, 0x2f, 0x73, 0x69, 0x67, 0x6d, 0x6f, 0x69,
	0x64, 0x2f, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x0f, 0x73, 0x69, 0x67, 0x6d, 0x6f, 0x69, 0x64, 0x2e, 0x73, 0x69, 0x67, 0x6d, 0x6f, 0x69, 0x64,
	0x22, 0x9f, 0x01, 0x0a, 0x07, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x24, 0x0a, 0x0d,
	0x73, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0d, 0x73, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x41, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x12, 0x20, 0x0a, 0x0b, 0x6d, 0x69, 0x6e, 0x74, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73,
	0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x6d, 0x69, 0x6e, 0x74, 0x41, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x04, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x16, 0x0a, 0x06,
	0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x04, 0x52, 0x06, 0x61, 0x6d,
	0x6f, 0x75, 0x6e, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x18, 0x05, 0x20, 0x01, 0x28, 0x04, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x42, 0xa2, 0x01, 0x0a, 0x13, 0x63, 0x6f, 0x6d, 0x2e, 0x73, 0x69, 0x67, 0x6d, 0x6f,
	0x69, 0x64, 0x2e, 0x73, 0x69, 0x67, 0x6d, 0x6f, 0x69, 0x64, 0x42, 0x0c, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x20, 0x63, 0x6f, 0x73, 0x6d,
	0x6f, 0x73, 0x73, 0x64, 0x6b, 0x2e, 0x69, 0x6f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x69, 0x67,
	0x6d, 0x6f, 0x69, 0x64, 0x2f, 0x73, 0x69, 0x67, 0x6d, 0x6f, 0x69, 0x64, 0xa2, 0x02, 0x03, 0x53,
	0x53, 0x58, 0xaa, 0x02, 0x0f, 0x53, 0x69, 0x67, 0x6d, 0x6f, 0x69, 0x64, 0x2e, 0x53, 0x69, 0x67,
	0x6d, 0x6f, 0x69, 0x64, 0xca, 0x02, 0x0f, 0x53, 0x69, 0x67, 0x6d, 0x6f, 0x69, 0x64, 0x5c, 0x53,
	0x69, 0x67, 0x6d, 0x6f, 0x69, 0x64, 0xe2, 0x02, 0x1b, 0x53, 0x69, 0x67, 0x6d, 0x6f, 0x69, 0x64,
	0x5c, 0x53, 0x69, 0x67, 0x6d, 0x6f, 0x69, 0x64, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x10, 0x53, 0x69, 0x67, 0x6d, 0x6f, 0x69, 0x64, 0x3a, 0x3a,
	0x53, 0x69, 0x67, 0x6d, 0x6f, 0x69, 0x64, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_sigmoid_sigmoid_request_proto_rawDescOnce sync.Once
	file_sigmoid_sigmoid_request_proto_rawDescData = file_sigmoid_sigmoid_request_proto_rawDesc
)

func file_sigmoid_sigmoid_request_proto_rawDescGZIP() []byte {
	file_sigmoid_sigmoid_request_proto_rawDescOnce.Do(func() {
		file_sigmoid_sigmoid_request_proto_rawDescData = protoimpl.X.CompressGZIP(file_sigmoid_sigmoid_request_proto_rawDescData)
	})
	return file_sigmoid_sigmoid_request_proto_rawDescData
}

var file_sigmoid_sigmoid_request_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_sigmoid_sigmoid_request_proto_goTypes = []interface{}{
	(*Request)(nil), // 0: sigmoid.sigmoid.Request
}
var file_sigmoid_sigmoid_request_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_sigmoid_sigmoid_request_proto_init() }
func file_sigmoid_sigmoid_request_proto_init() {
	if File_sigmoid_sigmoid_request_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_sigmoid_sigmoid_request_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Request); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_sigmoid_sigmoid_request_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_sigmoid_sigmoid_request_proto_goTypes,
		DependencyIndexes: file_sigmoid_sigmoid_request_proto_depIdxs,
		MessageInfos:      file_sigmoid_sigmoid_request_proto_msgTypes,
	}.Build()
	File_sigmoid_sigmoid_request_proto = out.File
	file_sigmoid_sigmoid_request_proto_rawDesc = nil
	file_sigmoid_sigmoid_request_proto_goTypes = nil
	file_sigmoid_sigmoid_request_proto_depIdxs = nil
}
