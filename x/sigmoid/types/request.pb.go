// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: sigmoid/sigmoid/request.proto

package types

import (
	fmt "fmt"
	proto "github.com/cosmos/gogoproto/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Request struct {
	SenderAddress string `protobuf:"bytes,1,opt,name=senderAddress,proto3" json:"senderAddress,omitempty"`
	MintAddress   string `protobuf:"bytes,2,opt,name=mintAddress,proto3" json:"mintAddress,omitempty"`
	Status        uint64 `protobuf:"varint,3,opt,name=status,proto3" json:"status,omitempty"`
	Amount        uint64 `protobuf:"varint,4,opt,name=amount,proto3" json:"amount,omitempty"`
}

func (m *Request) Reset()         { *m = Request{} }
func (m *Request) String() string { return proto.CompactTextString(m) }
func (*Request) ProtoMessage()    {}
func (*Request) Descriptor() ([]byte, []int) {
	return fileDescriptor_7896fc68fad66bd0, []int{0}
}
func (m *Request) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Request) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Request.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Request) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Request.Merge(m, src)
}
func (m *Request) XXX_Size() int {
	return m.Size()
}
func (m *Request) XXX_DiscardUnknown() {
	xxx_messageInfo_Request.DiscardUnknown(m)
}

var xxx_messageInfo_Request proto.InternalMessageInfo

func (m *Request) GetSenderAddress() string {
	if m != nil {
		return m.SenderAddress
	}
	return ""
}

func (m *Request) GetMintAddress() string {
	if m != nil {
		return m.MintAddress
	}
	return ""
}

func (m *Request) GetStatus() uint64 {
	if m != nil {
		return m.Status
	}
	return 0
}

func (m *Request) GetAmount() uint64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

func init() {
	proto.RegisterType((*Request)(nil), "sigmoid.sigmoid.Request")
}

func init() { proto.RegisterFile("sigmoid/sigmoid/request.proto", fileDescriptor_7896fc68fad66bd0) }

var fileDescriptor_7896fc68fad66bd0 = []byte{
	// 182 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x2d, 0xce, 0x4c, 0xcf,
	0xcd, 0xcf, 0x4c, 0xd1, 0x87, 0xd1, 0x45, 0xa9, 0x85, 0xa5, 0xa9, 0xc5, 0x25, 0x7a, 0x05, 0x45,
	0xf9, 0x25, 0xf9, 0x42, 0xfc, 0x50, 0x61, 0x3d, 0x28, 0xad, 0xd4, 0xc8, 0xc8, 0xc5, 0x1e, 0x04,
	0x51, 0x22, 0xa4, 0xc2, 0xc5, 0x5b, 0x9c, 0x9a, 0x97, 0x92, 0x5a, 0xe4, 0x98, 0x92, 0x52, 0x94,
	0x5a, 0x5c, 0x2c, 0xc1, 0xa8, 0xc0, 0xa8, 0xc1, 0x19, 0x84, 0x2a, 0x28, 0xa4, 0xc0, 0xc5, 0x9d,
	0x9b, 0x99, 0x57, 0x02, 0x53, 0xc3, 0x04, 0x56, 0x83, 0x2c, 0x24, 0x24, 0xc6, 0xc5, 0x56, 0x5c,
	0x92, 0x58, 0x52, 0x5a, 0x2c, 0xc1, 0xac, 0xc0, 0xa8, 0xc1, 0x12, 0x04, 0xe5, 0x81, 0xc4, 0x13,
	0x73, 0xf3, 0x4b, 0xf3, 0x4a, 0x24, 0x58, 0x20, 0xe2, 0x10, 0x9e, 0x93, 0xe1, 0x89, 0x47, 0x72,
	0x8c, 0x17, 0x1e, 0xc9, 0x31, 0x3e, 0x78, 0x24, 0xc7, 0x38, 0xe1, 0xb1, 0x1c, 0xc3, 0x85, 0xc7,
	0x72, 0x0c, 0x37, 0x1e, 0xcb, 0x31, 0x44, 0x89, 0xc3, 0x7c, 0x51, 0x01, 0xf7, 0x4f, 0x49, 0x65,
	0x41, 0x6a, 0x71, 0x12, 0x1b, 0xd8, 0x3b, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x47, 0x10,
	0x9e, 0xa6, 0xef, 0x00, 0x00, 0x00,
}

func (m *Request) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Request) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Request) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Amount != 0 {
		i = encodeVarintRequest(dAtA, i, uint64(m.Amount))
		i--
		dAtA[i] = 0x20
	}
	if m.Status != 0 {
		i = encodeVarintRequest(dAtA, i, uint64(m.Status))
		i--
		dAtA[i] = 0x18
	}
	if len(m.MintAddress) > 0 {
		i -= len(m.MintAddress)
		copy(dAtA[i:], m.MintAddress)
		i = encodeVarintRequest(dAtA, i, uint64(len(m.MintAddress)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.SenderAddress) > 0 {
		i -= len(m.SenderAddress)
		copy(dAtA[i:], m.SenderAddress)
		i = encodeVarintRequest(dAtA, i, uint64(len(m.SenderAddress)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintRequest(dAtA []byte, offset int, v uint64) int {
	offset -= sovRequest(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Request) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.SenderAddress)
	if l > 0 {
		n += 1 + l + sovRequest(uint64(l))
	}
	l = len(m.MintAddress)
	if l > 0 {
		n += 1 + l + sovRequest(uint64(l))
	}
	if m.Status != 0 {
		n += 1 + sovRequest(uint64(m.Status))
	}
	if m.Amount != 0 {
		n += 1 + sovRequest(uint64(m.Amount))
	}
	return n
}

func sovRequest(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozRequest(x uint64) (n int) {
	return sovRequest(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Request) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowRequest
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
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
			return fmt.Errorf("proto: Request: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Request: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SenderAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRequest
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
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
				return ErrInvalidLengthRequest
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthRequest
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SenderAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MintAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRequest
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
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
				return ErrInvalidLengthRequest
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthRequest
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.MintAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Status", wireType)
			}
			m.Status = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRequest
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Status |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			m.Amount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRequest
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Amount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipRequest(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthRequest
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipRequest(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowRequest
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowRequest
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowRequest
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthRequest
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupRequest
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthRequest
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthRequest        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowRequest          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupRequest = fmt.Errorf("proto: unexpected end of group")
)