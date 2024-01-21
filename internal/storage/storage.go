package storage

import (
	"bytes"
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
	_ "github.com/joho/godotenv/autoload"
)

var bucket = os.Getenv("S3_BUCKET_NAME")

type Service interface {
	GetUploader() *s3manager.Uploader
	GetSession() *session.Session
	UploadFile(fileData []byte, fileName string, fileType string) (*s3manager.UploadOutput, error)
}

type service struct {
	session  *session.Session
	uploader *s3manager.Uploader
}

func New() Service {

	s3Session, err := session.NewSessionWithOptions(
		session.Options{
			SharedConfigState: session.SharedConfigEnable,
		},
	)
	if err != nil {
		panic(err)
	}
	uploader := s3manager.NewUploader(s3Session)

	s := &service{}
	s.uploader = uploader
	s.session = s3Session

	return s
}

func (s *service) GetUploader() *s3manager.Uploader {
	return s.uploader
}

func (s *service) GetSession() *session.Session {
	return s.session
}

func (s *service) UploadFile(fileData []byte, fileName string, fileType string) (*s3manager.UploadOutput, error) {
	return s.uploader.Upload(&s3manager.UploadInput{
		Bucket:      aws.String(bucket),
		Key:         aws.String(fileName),
		Body:        bytes.NewReader(fileData),
		ContentType: aws.String(fileType),
	})
}
